# Contributing a template

Templates are full-page scaffolds — they give a developer a working page structure to customize, not a drop-in component. A template can include multiple files (pages, sub-components, data files).

## Template folder structure

```
templates/
  your-template-name/
    template.json       ← required manifest
    index.js            ← compose() entry that registers all components
    pages/
      hero-page.js      ← page component(s)
    components/         ← optional: sub-components specific to this template
      feature-section.js
```

## template.json fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | ✅ | Matches the folder name (kebab-case) |
| `description` | ✅ | One sentence — what this template is for |
| `sections` | ✅ | Array of section names in order (e.g. `["hero-split", "faq", "cta"]`) |
| `files` | ✅ | Array of all files scaffolded by this template |
| `components` | optional | `muffin-components` dependencies — what to `muf add` before using |
| `slots` | optional | Key/value of things meant to be customized (headline, CTA text, etc.) |
| `tags` | optional | Keywords for search |
| `usage` | optional | Array of `{ label, code }` usage examples |

### Minimal template.json

```json
{
  "name": "saas-landing-page",
  "description": "Full SaaS marketing landing page — hero, features, FAQ, and CTA sections.",
  "sections": ["hero-split", "social-proof", "feature-video", "dark-cta", "faq", "bottom-cta"],
  "files": ["index.js", "pages/hero-page.js"],
  "components": ["lucide-icon"],
  "tags": ["landing-page", "saas", "marketing"]
}
```

## Guidelines

- **Strip brand content** — no project-specific copy, logos, videos, or colors. Use `<!-- CUSTOMIZE: ... -->` comments to mark what to replace.
- **No external dependencies** beyond npm packages already in the consuming project. List any `muffin-components` dependencies in the `components` field.
- **Keep it functional** — the scaffolded files should render without errors even before customization (placeholder text is fine).
- **index.js must export a `compose()` function** that registers all components used by the template.
- **No malicious patterns** — `eval`, `new Function`, `document.write`, or `innerHTML` with script injection will be rejected.

## Submitting a PR

1. Fork `FootLooseLabs/muffin-templates`
2. Create a branch: `add-<your-template-name>`
3. Add your template folder under `templates/`
4. Add an entry to `registry.json` under `"templates"`
5. Open a PR — the auto-review workflow will validate your submission

The auto-review checks:
- `registry.json` is valid JSON with required fields
- `template.json` exists and has required fields
- All files listed in `template.json` `files` array exist
- No malicious patterns in any scaffolded file
- No orphan template folders without a registry entry
