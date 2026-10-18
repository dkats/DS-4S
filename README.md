# DS-4S (Quarto version)

## Build
1. Install Quarto (bundled with recent RStudio; check with `quarto --version`).
2. In this folder: `quarto preview` (live preview) or `quarto render` (writes the site to `docs/`).

## Deploy on GitHub Pages
1. Commit this project, including `docs/`, and push.
2. Repo Settings -> Pages -> Deploy from branch -> `main` / `/docs`.
3. Custom domain: enter it under Settings -> Pages, and add a file named `CNAME`
   (containing just the domain) inside `docs/` after each render. To keep it
   automatic, create `CNAME` in the project root and add it under
   `project: resources:` in `_quarto.yml`.
4. Add a CNAME (or A) record at your DNS provider as GitHub's docs describe.

## Updating data
Replace the four CSVs in `data/` (same columns) and re-render. No R is needed.

## Files
- `index.qmd` map page, `country-data.qmd` country page (Observable JS + Plotly.js)
- `assets/helpers.js` all data logic (scores, hover text, excluded countries, question parsing)
- `interviews/citation/methods/about.qmd` your original HTML pages, unchanged
- `assets/styles.css` fonts and country-page styling
