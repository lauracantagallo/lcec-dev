# Maintenance Checklist

Tasks to run periodically or before a PR. Most require judgment — automated checks are noted where available.

---

## CSS / SCSS

- [ ] **DRY pass** — look for repeated rule blocks, hover/focus patterns, or values that could share a mixin
- [ ] **Token audit** — check for hardcoded values (`1rem`, `#556b2f`, `0.3s`) not using `$space-*`, `$color-*`, or transition tokens
- [ ] **Unused classes** — search for CSS classes that no longer appear in any template
- [ ] **Stylelint** — `npm run lint:css`

## JavaScript

- [ ] **DRY pass** — look for duplicated logic that could move to `utils/dom.js` or `utils/form.js`
- [ ] **Security scan** — check for any `innerHTML` assignments; all external link icons must use `createElementNS`
- [ ] **`rel` audit** — all `target="_blank"` links must have `rel="noopener noreferrer"` (applied automatically by `initExternalLinks()`, but check static markup too)
- [ ] **ESLint** — `npm run lint:js`

## Templates

- [ ] **CMS-readiness** — look for hardcoded strings in `.njk` files that should come from `_data/` (site name, phone, email, URLs, headings)
- [ ] **`| safe` filter** — any frontmatter field that contains HTML must use `| safe` in the template
- [ ] **Heading classes** — new section headings should follow the established class convention in `_sections.scss`

## Accessibility

- [ ] **WCAG contrast** — check links and text on dark/blue backgrounds; minimum 4.5:1 for normal text
- [ ] **Focus indicators** — white outline on dark backgrounds, primary-color outline on light; run through all interactive elements
- [ ] **Heading hierarchy** — each page should have one `<h1>`; `<h2>` and below should follow a logical order
- [ ] **`aria-*` attributes** — `aria-expanded`, `aria-hidden`, `aria-current` should reflect actual state
- [ ] **axe-core scan** — `npm run build && npm run lint:a11y`

## Content

- [ ] **Internal links** — any new copy that mentions a service, page, or topic should link to the relevant page
- [ ] **Spelling, grammar, and fact-checking** — review any new or edited copy for typos, grammatical errors, and factual accuracy (stats, dates, credentials, service descriptions)
- [ ] **Stat accuracy** — WebAIM Million figures, ADA Title II deadlines, and years of experience update periodically

## SEO

- [ ] **Per-page descriptions** — every page must have a unique `description` in frontmatter
- [ ] **Schema accuracy** — `ProfessionalService` and `Person` JSON-LD in `head.njk`; check credentials, `areaServed`, and `sameAs` are current

## Documentation

- [ ] **CHANGELOG** — add an entry for any meaningful code change
- [ ] **UPDATES.md** — add a plain-language entry for anything user-facing (for Laura)
- [ ] **TODO.md** — close resolved items; add new findings under the correct category
- [ ] **CONTENT_SUGGESTIONS.md** — add any new copy issues found; close items that have been resolved with Laura
- [ ] **README accuracy** — check tech stack, project structure, and deployment sections reflect current state

## Dependencies

- [ ] **`npm outdated`** — review and update packages with no breaking changes
- [ ] **`npm audit`** — check for known vulnerabilities; high/critical issues should block a release
