# OnePatch docs

Mintlify. Merging to `main` deploys to docs.onepatch.dev.

**Mintlify builds every `.md` and `.mdx` file at the repo root into a public page**, whether or not it appears in `docs.json` navigation — this file is served at `/CLAUDE`. There is no exclusion setting. Keep internal notes in `.claude/`, which is not served, and assume anything at the root is public.

Mintlify also inlines `style.css` into the page and serves nothing at `/style.css` — that URL 404s and never reflects a deploy. To check a CSS change is live, grep the served page HTML for a selector you added.

## Changelog

Writing or editing `changelog.mdx`? Load the `changelog` skill first. It carries the house style, the `<Update>` mechanics, and the checks to run before publishing.
