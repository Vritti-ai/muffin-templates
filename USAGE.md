# Using muffin templates

Install the `muf` CLI:

```sh
npm install -g @muffin/cli
```

## Quick Reference

| Command | What it does |
|---------|-------------|
| `muf list --templates` | List all available templates |
| `muf search --templates <query>` | Search templates by name, description or tags |
| `muf info --template <template>` | Show manifest, sections, and slots |
| `muf init <template>` | Scaffold a template into your project |

## Commands

### `muf list --templates`

Browse all templates available in the registry.

```sh
muf list --templates
```

### `muf search --templates <query>`

Search templates by name, description or tags.

```sh
muf search --templates landing
muf search --templates saas
```

### `muf info --template <template>`

Show the full manifest — sections, slots, required components, files scaffolded.

```sh
muf info --template saas-landing-page
```

### `muf init <template>`

Scaffold a template into your project. Defaults to `./src/`.

```sh
muf init saas-landing-page
muf init saas-landing-page --dir ./src/pages
```

Files are copied directly into your project — you own them and can modify them freely.

### Updating a template

Re-run `muf init` to pull the latest version. Existing files will be overwritten, so commit your changes first.

```sh
muf init saas-landing-page
```
