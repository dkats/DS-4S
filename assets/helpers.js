// Shared logic for the DS-4S site. Pure functions only (no DOM), so they can be unit-tested.

// ---- Surveys ----
// id      -> suffix used in data file names (scores_<id>.csv, etc.)
// map     -> "world" (ISO-3 codes in the `code` column) or "usa" (2-letter state codes in `code`)
// aspect  -> width/height ratio of the map container
export const SURVEYS = [
  { id: "intl_2023", label: "International 2023", map: "world", aspect: "2.4/1" },
  { id: "usa_2025",  label: "USA 2025",           map: "usa",   aspect: "2.4/1" },
  { id: "intl_2025", label: "International 2025", map: "world", aspect: "2.4/1" }
].sort((a, b) => a.label.localeCompare(b.label));   // dropdown is alphabetical, whatever order entries are added in

export const DEFAULT_SURVEY = "intl_2023";

export const surveyById = id => SURVEYS.find(s => s.id === id) || SURVEYS.find(s => s.id === DEFAULT_SURVEY);

// ---- Domains ----
// Domains are defined per survey in data/domains_<id>.csv (columns: label, key, color).

export function warnUnmappedQuestions(domains, questions) {
  const known = new Set(domains.map(d => d.key));
  const bad = [...new Set(questions.map(q => q.domain).filter(d => d && !known.has(d)))];
  if (bad.length) console.warn("Question domains with no key match in the domains CSV:", bad);
}

// Fallback used if a survey's domains file is missing or empty.
export const OVERALL = { label: "Overall", key: "overall", color: "#4348db" };

// Cleans the CSV rows. If scores are given, drops domains whose `<key>_score` column doesn't exist.
export function parseDomains(rows, scores = []) {
  const cols = scores.length ? new Set(Object.keys(scores[0])) : null;
  const out = (rows || [])
    .map(r => ({
      label: String(r.label ?? "").trim(),
      key: String(r.key ?? "").trim(),
      color: String(r.color ?? "").trim()
    }))
    .filter(d => d.label && d.key && d.color)
    .filter(d => {
      const ok = !cols || cols.has(`${d.key}_score`);
      if (!ok) console.warn(`Domain "${d.label}": no "${d.key}_score" column in the scores file`);
      return ok;
    });
  return out.length ? out : [OVERALL];
}

// Colour for a question's domain key (left border on the region page)
export const questionDomainColor = (domains, key) =>
  domains.find(d => d.key === (key || "").trim())?.color || "transparent";
  
// Treats null, "", "NA", "N/A", NaN and any other non-numeric value as missing (null).
export function num(x) {
  if (x === null || x === undefined) return null;
  if (typeof x === "string") {
    const t = x.trim();
    if (t === "" || /^(na|n\/a|nan|null)$/i.test(t)) return null;
    x = Number(t);
  }
  return typeof x === "number" && Number.isFinite(x) ? x : null;
}

const EN_DASH = "\u2013";
const EM_DASH = "\u2014";

// Puerto Rico isn't in Plotly's "albers usa" projection, so it gets its own inset geo.
const PR_CODES = new Set(["PR", "PRI"]);
const isPR = (survey, code) => survey.map === "usa" && PR_CODES.has(code);
const mapLocation = (survey, code) => (isPR(survey, code) ? "PRI" : code);

export function ordinal(n) {
  n = num(n);
  if (n === null) return "";
  const mod100 = n % 100;
  let suffix = "th";
  if (!(mod100 >= 11 && mod100 <= 13)) {
    suffix = { 1: "st", 2: "nd", 3: "rd" }[n % 10] || "th";
  }
  return `${n}<sup>${suffix}</sup>`;
}

export function fmtScore(x, digits = 2) {
  x = num(x);
  if (x === null) return EM_DASH;
  return x.toFixed(digits).replace("-", EN_DASH);
}

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16));
}

// White -> colour gradient that starts 20% of the way towards the colour (as in the Shiny app)
export function gradient(color, startFrac = 0.2) {
  const rgb = hexToRgb(color);
  const start = rgb.map(c => Math.round(255 + startFrac * (c - 255)));
  return [[0, `rgb(${start.join(",")})`], [1, color]];
}

function hoverText(row, domains) {
  const lines = domains.map(({ label, key }) => {
    const score = fmtScore(row[`${key}_score`]);
    const rank = num(row[`${key}_rank`]);
    const r = rank === null ? "" : ` (${ordinal(rank)})`;
    return `${label}: ${score}${r}`;
  });
  return `<b>${row.region}</b><br>` + lines.join("<br>");
}

const EXCLUDED_REASONS = {
  members: [
    "Survey completed, but the organization was excluded due",
    "to fewer than 50% of the organization's members either having",
    "Down syndrome or having family members with Down syndrome"
  ],
  focus: [
    "Survey completed, but the organization was excluded",
    "due to not having a holistic focus on the lives",
    "of people with Down syndrome"
  ],
  both: [
    "Survey completed, but the organization was excluded due",
    "to not having a holistic focus on the lives of people with",
    "Down syndrome and fewer than 50% of the organization's",
    "members either having Down syndrome or having family",
    "members with Down syndrome"
  ]
};

// Excluded regions: one entry per ISO/state code that has no included organization.
export function excludedRegions(inclusion) {
  const includedCode = new Set(inclusion.filter(r => r.include === "Yes").map(r => r.code));
  const seen = new Set();
  const out = [];
  for (const r of inclusion) {
    if (includedCode.has(r.code) || seen.has(r.code)) continue;
    seen.add(r.code);
    const membersOk = r.related_to_ds === "50% - 74%" || r.related_to_ds === "75% or more";
    const holistic = r.focus === "Holistic";
    let reason = null;
    if (!membersOk && holistic) reason = "members";
    else if (membersOk && !holistic) reason = "focus";
    else if (!membersOk && !holistic) reason = "both";
    if (reason) out.push({ region: r.region, code: r.code, reason });
  }
  return out;
}

export function buildMapTraces(scores, inclusion, domain, showExcluded, survey = SURVEYS[0], domains = [OVERALL]) {
  const dom = domains.find(d => d.key === domain) || domains[0] || OVERALL;
  const key = `${dom.key}_score`;
  const text = r => hoverText(r, domains);   // wrapper needed: .map() would pass the index as 2nd arg
  const usa = survey.map === "usa";
  const locationmode = usa ? "USA-states" : "ISO-3";
  const valid = scores.filter(r => num(r[key]) !== null);
  const missing = scores.filter(r => num(r[key]) === null);
  const zs = valid.map(r => num(r[key]));
  const zmin = zs.length ? Math.min(...zs) : 0;
  const zmax = zs.length ? Math.max(...zs) : 0;

  const traces = [];

  // Builds the main trace and, for USA surveys, a matching PR inset trace.
  // `base` holds everything except locations/z/text; `rows` are the score rows.
  // Returns the number of traces pushed so click handling can stay predictable.
  const addChoropleth = (rows, zFn, textFn, base) => {
    const main = usa ? rows.filter(r => !PR_CODES.has(r.code)) : rows;
    traces.push({
      type: "choropleth", locationmode, hoverinfo: "text",
      z: main.map(zFn), locations: main.map(r => r.code), text: main.map(textFn),
      ...base
    });
    if (usa) {
      const pr = rows.filter(r => PR_CODES.has(r.code));
      // Always push (even if empty) so curveNumber ordering never shifts.
      traces.push({
        type: "choropleth", locationmode: "ISO-3", geo: "geo2", hoverinfo: "text",
        z: pr.map(zFn), locations: pr.map(() => "PRI"), text: pr.map(textFn),
        ...base, showscale: false
      });
    }
  };

  // Valid scores (carries the colour bar). Shared zmin/zmax so PR matches.
   addChoropleth(valid, r => num(r[key]), text, {
    colorscale: gradient(dom.color),
    zmin, zmax,
    marker: { line: { color: "black", width: 0.5 } },
    colorbar: {
      title: { text: "Score" },
      tickvals: [zmin, zmax - 0.1 * (zmax - zmin)],
      ticktext: ["Needs Improvement", "Role Model"],
      tickangle: 90, ticklen: 0,
      x: 1.02, xanchor: "left", y: 1, yanchor: "top", len: 0.7
    }
  });

  // Missing scores (grey)
  addChoropleth(missing, () => 0, text, {
    colorscale: [[0, "#7f7f7f"], [1, "#7f7f7f"]],
    showscale: false,
    marker: { line: { color: "black", width: 0.5 } }
  });

  // Excluded regions (light grey), optional
  if (showExcluded) {
    for (const reason of ["members", "focus", "both"]) {
      const group = excludedRegions(inclusion).filter(c => c.reason === reason);
      if (!group.length) continue;
      addChoropleth(group, () => 0,
        c => `<b>${c.region}</b><br>` + EXCLUDED_REASONS[reason].join("<br>"), {
          colorscale: [[0, "#cccccc"], [1, "#cccccc"]],
          showscale: false,
          marker: { line: { color: "black", width: 0.5 } }
        });
    }
  }

  // ...legend swatches unchanged...
  const swatch = (name, color) => ({
    type: "scattergeo", lon: [null], lat: [null], mode: "markers",
    name, showlegend: true, hoverinfo: "skip",
    marker: { symbol: "square", size: 20, color, line: { color: "black", width: 0.5 } }
  });
  if (missing.length) traces.push(swatch("No score due to missing response", "#7f7f7f"));
  if (showExcluded && excludedRegions(inclusion).length) {
    traces.push(swatch("Excluded organization", "#cccccc"));
  }

  return traces;
}

function geoLayout(survey) {
  if (survey.map === "usa") {
    return {
      scope: "usa",
      projection: { type: "albers usa" },   // places Alaska and Hawaii as insets
      showframe: false,
      showlakes: true,
      lakecolor: "white",
      showcoastlines: true,
      coastlinecolor: "black",
      coastlinewidth: 0.5,
      domain: { x: [0, 1], y: [0, 1] }
    };
  }
  return {
    showregions: true,
    showframe: false,
    showcoastlines: true,
    coastlinecolor: "black",
    coastlinewidth: 0.5,
    showcountries: true,
    countrycolor: "black",
    countrywidth: 0.5,
    projection: { type: "equirectangular" },   // zoom in a bit
    lonaxis: { range: [-170, 180] },           // trims empty Pacific edge
    lataxis: { range: [-58, 85] },             // crops empty Antarctica / Arctic space
    domain: { x: [0, 1], y: [0, 1] }
  };
}

export function mapLayout(domain, survey = SURVEYS[0], domains = [OVERALL]) {
  const label = (domains.find(d => d.key === domain) || domains[0] || OVERALL).label;
  const layout = {
    title: { text: label, font: { size: 30 }, x: 0.5, xanchor: "center", y: 0.98, yanchor: "top" },
    geo: geoLayout(survey),
    margin: { t: 20, l: 0, r: 0, b: 0 },
    font: { family: "sans-serif" },
    legend: {
      x: 1.02, xanchor: "left", y: 0.2, yanchor: "top",
      bgcolor: "rgba(255,255,255,0.8)", itemclick: false, itemdoubleclick: false
    }
  };
  if (survey.map === "usa") {
    layout.geo2 = {
      scope: "north america",
      projection: { type: "mercator" },
      lonaxis: { range: [-67.5, -65.0] },
      lataxis: { range: [17.7, 18.6] },
      showframe: false,
      showland: false,
      showcoastlines: true, coastlinecolor: "black", coastlinewidth: 0.5,
      showcountries: false,
      bgcolor: "rgba(0,0,0,0)",
      // Bottom-left, beside the Alaska/Hawaii insets. Tweak to taste.
      domain: { x: [0.80, 0.90], y: [0.02, 0.2] }
    };
  }
  return layout;
}

// ---- Region page helpers ----

// questions_*.csv is "wide": row 1 = IDs, row 2 = Question, row 3 = Domain, row 4 = Scale.
export function parseQuestions(rows) {
  if (!rows || rows.length < 4) return [];
  const t = s => (typeof s === "string" ? s.trim() : s);
  const [ids, questions, domains, scales] = rows.map(row => row.map(t));
  return ids.slice(1).map((id, i) => ({
    id,
    question: questions[i + 1],
    domain: domains[i + 1],
    scale: scales[i + 1]
  }));
}

// Matches the Shiny app: if a region has several respondent rows, the first is shown.
export function firstByRegion(rows, field) {
  const seen = new Set();
  return rows.filter(r => {
    if (seen.has(r[field])) return false;
    seen.add(r[field]);
    return true;
  });
}

export function scoreRows(scoreRow, domains = [OVERALL]) {
  return domains.map(({ label, key, color }) => {
    const s = num(scoreRow[`${key}_score`]);
    const r = num(scoreRow[`${key}_rank`]);
    return {
      label, key, color,
      score: s === null ? EM_DASH : s.toFixed(1).replace("-", EN_DASH),
      rank: r === null ? EM_DASH : String(r)
    };
  });
}

export const dash = s => (s === null || s === undefined ? "" : String(s).replace(/-/g, EN_DASH));
