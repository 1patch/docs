# OnePatch docs

Mintlify. Merging to `main` deploys to docs.onepatch.dev.

Mintlify inlines `style.css` into the page and serves nothing at `/style.css` — that URL 404s and never reflects a deploy. To check a CSS change is live, grep the served page HTML for a selector you added.

## Changelog

**Writing, editing, or pruning `changelog.mdx`? Load the `changelog` skill first.** It is the whole ritual — what the changelog is for, the nine rules, the scoring rubric that decides whether an entry ships at all, the self-audit greps, and how to verify the deploy. Don't write an entry from instinct; the rules exist because instinct produced copy we rejected.

The one thing worth repeating here, because it generates the rest: describe what the product does, don't assert what it's worth. A description is checkable and a claim isn't. The agent's output is the subject of the sentence — not us, and not the reader's obligations.
