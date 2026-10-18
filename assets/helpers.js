// Shared logic for the DS-4S site. Pure functions only (no DOM), so they can be unit-tested.

export const DOMAIN_LIST = [
  ["Overall", "all_domain"],
  ["Community Inclusion", "community"],
  ["Education", "edu"],
  ["Healthcare", "health"],
  ["Independence", "indep"],
  ["Policy and Law", "policy"]
];

export const DOMAIN_COLORS = {
  all_domain: "#4348db",
  community: "#2a8aa9",
  edu: "#30a92a",
  health: "#d07c31",
  indep: "#c1231e",
  policy: "#b437af"
};

// Question "Domain" labels (from questions.csv) -> CSS class used on the region page
export const QUESTION_DOMAIN_CLASS = {
  "Community Inclusion": "CommunityInclusion",
  "Education": "Education",
  "Healthcare": "Healthcare",
  "Independence": "Independence",
  "Social and Policy Issues": "SocialandPolicyIssues"
};

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

function hoverText(row) {
  const lines = DOMAIN_LIST.map(([label, key]) => {
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

// Excluded regions: one entry per ISO code that has no included organization.
export function excludedRegions(inclusion) {
  const includedIso = new Set(inclusion.filter(r => r.include === "Yes").map(r => r.iso));
  const seen = new Set();
  const out = [];
  for (const r of inclusion) {
    if (includedIso.has(r.iso) || seen.has(r.iso)) continue;
    seen.add(r.iso);
    const membersOk = r.related_to_ds === "50% - 74%" || r.related_to_ds === "75% or more";
    const holistic = r.focus === "Holistic";
    let reason = null;
    if (!membersOk && holistic) reason = "members";
    else if (membersOk && !holistic) reason = "focus";
    else if (!membersOk && !holistic) reason = "both";
    if (reason) out.push({ region: r.region, iso: r.iso, reason });
  }
  return out;
}

export function buildMapTraces(scores, inclusion, domain, showExcluded) {
  const key = `${domain}_score`;
  const valid = scores.filter(r => num(r[key]) !== null);
  const missing = scores.filter(r => num(r[key]) === null);
  const zs = valid.map(r => num(r[key]));
  const zmin = zs.length ? Math.min(...zs) : 0;
  const zmax = zs.length ? Math.max(...zs) : 0;

  const traces = [];

  // Trace 0: regions with a score for this domain (carries the colour bar)
  traces.push({
    type: "choropleth",
    z: zs,
    locations: valid.map(r => r.iso),
    text: valid.map(hoverText),
    hoverinfo: "text",
    colorscale: gradient(DOMAIN_COLORS[domain]),
    marker: { line: { color: "black", width: 0.5 } },
    colorbar: {
      title: { text: "Score" },
      tickvals: [zmin, zmax - 0.1 * (zmax - zmin)],
      ticktext: ["Needs Improvement", "Role Model"],
      tickangle: 90,
      ticklen: 0
    }
  });

  // Trace 1: regions with no score in this domain (grey)
  traces.push({
    type: "choropleth",
    z: missing.map(() => 0),
    locations: missing.map(r => r.iso),
    text: missing.map(hoverText),
    hoverinfo: "text",
    colorscale: [[0, "#7f7f7f"], [1, "#7f7f7f"]],
    showscale: false,
    marker: { line: { color: "black", width: 0.5 } }
  });

  // Trace 2+: excluded regions (light grey), optional
  if (showExcluded) {
    for (const reason of ["members", "focus", "both"]) {
      const group = excludedRegions(inclusion).filter(c => c.reason === reason);
      if (!group.length) continue;
      traces.push({
        type: "choropleth",
        z: group.map(() => 0),
        locations: group.map(c => c.iso),
        text: group.map(c => `<b>${c.region}</b><br><br>` + EXCLUDED_REASONS[reason].join("<br>")),
        hoverinfo: "text",
        colorscale: [[0, "#cccccc"], [1, "#cccccc"]],
        showscale: false,
        marker: { line: { color: "black", width: 0.5 } }
      });
    }
  }
  return traces;
}

export function mapLayout(domain) {
  const label = DOMAIN_LIST.find(d => d[1] === domain)[0];
  return {
    title: { text: label, font: { size: 30 } },
    geo: { showregions: true, showframe: false, showcoastlines: true, projection: { type: "equirectangular" } },
    margin: { t: 100, l: 0, r: 0, b: 0 },
    font: { family: "Open Sans, sans-serif" }
  };
}

// ---- Region page helpers ----

// questions.csv is "wide": row 1 = IDs, row 2 = Question, row 3 = Domain, row 4 = Scale.
export function parseQuestions(rows) {
  const [ids, questions, domains, scales] = rows;
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

export function scoreRows(scoreRow) {
  return DOMAIN_LIST.map(([label, key]) => {
    const s = num(scoreRow[`${key}_score`]);
    const r = num(scoreRow[`${key}_rank`]);
    return {
      label,
      key,
      color: DOMAIN_COLORS[key],
      score: s === null ? EM_DASH : s.toFixed(1).replace("-", EN_DASH),
      rank: r === null ? EM_DASH : String(r)
    };
  });
}

export const dash = s => (s === null || s === undefined ? "" : String(s).replace(/-/g, EN_DASH));
