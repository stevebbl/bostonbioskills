# BBL Quote Builder (Web App)

A single-page React app to generate pricing proposals using historical medians, with:
- Location-specific pricing (Lexington vs Providence)
- Discount rules & approval thresholds
- Branding (logos in UI + embedded in DOCX)
- One-click **Send for Signature** (mailto handoff)
- Exports **DOCX** proposal + **CSV** line items

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Usage
1. **Upload RateCard CSV** (from your extractor). Columns supported:
   - `item_norm`, `unit_median` (required)
   - Optional: `location` or `location_hint` (values containing 'Providence' or not)
2. Choose **Location** (Lexington, MA / Providence, RI).
3. Fill the questionnaire fields; preview auto-calculated pricing.
4. (Optional) Set **Discount Type** and %; app enforces approval guardrails.
5. Click **Download DOCX Proposal** or **Send for Signature**.

> Logos are preloaded from `public/logos/bbl-main.png` and `public/logos/bbl-providence.png`.
> Replace those files with your latest assets as desired.

## Build & Deploy (GitHub Pages)

### Manual (gh-pages branch)
```bash
npm run build
# outputs to dist/
# Push the contents of dist/ to your gh-pages branch and enable Pages.
```

### Or GitHub Actions
Create `.github/workflows/pages.yml` with a Pages action that runs `npm ci && npm run build` and publishes `dist/`.

## Tech
- Vite + React + TypeScript
- TailwindCSS (utility classes)
- Libraries: `papaparse`, `file-saver`, `docx`

## Notes
- The `Send for Signature` button opens a prefilled email draft. If you prefer DocuSign/Dropbox Sign, wire their API call where indicated in `App.tsx`.
