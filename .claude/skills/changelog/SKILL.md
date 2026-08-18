---
name: changelog
description: Write, edit, prune, or review entries in the OnePatch public changelog (docs.onepatch.dev/changelog, changelog.mdx). Use whenever something shipped and needs announcing, when an entry needs rewriting, when auditing the changelog for entries that don't earn their place, or when someone asks how changelog copy is supposed to read. Carries the three jobs the changelog does, the nine rules, the scoring rubric, the self-audit greps, and how to verify the deploy.
---

# Changelog

## What it's for

Three jobs. Every decision below serves one of them.

1. **Announce momentum.** A prospect scrolling the page should see a company that ships continuously. Cadence and density are the message; a thin month reads as a stall whether or not it was one.
2. **Test PMF signals.** Which entries get clicked, asked about, and replied to is cheap product research. An entry that describes something nobody can act on returns no signal, which makes it worse than absent — it dilutes the signal from the ones that would have.
3. **Control the narrative about who we are and how we became it.** The sequence of entries is an argument about what kind of company built this. It should read as deliberate accumulation toward an SRE agent, not a work log.

Not a job: telling the founding story. There's no time for it and nobody asked. The narrative is carried by *what shipped in what order*, not by prose about the journey.

## The reader

A technical person scanning for something that changes their day. They give an entry a title and one line before deciding to move on. They are not on your team, they did not use the product last month, and they have no idea what any of your internal nouns mean.

## The core move

Describe what the product does; don't assert what it's worth. A description is checkable and a claim isn't.

> "The pull requests the agent has opened, each with the monitor history that prompted it" — verifiable in thirty seconds.
> "Triage faster" — can only be taken on faith, and the readers worth having won't.

So the agent's output is the subject of the sentence. Not us, and not the reader's obligations. Every rule below falls out of that.

Within that, order matters: the first clause says what the customer gets — the outcome they can check — and the mechanism earns at most a clause after it. "The agent watches the change in production for three days and reports on the PR whether it held up" leads with the outcome; "a temporary monitor checks signals from deploy through a soak, then reports a verdict" is the same feature described from inside the machine. Choreography — which component posts, phase names, status vocabularies, cadences, window lengths — is never the news; keep a mechanical term only when the reader needs it to use the feature. The test: cover everything after the first clause and ask whether a customer still knows why they'd care.

## The rules

1. No announcement voice. Never "we're excited," "introducing," "say hello to."
2. No three-beat cadence ("faster, simpler, and more reliable") and no "not just X, but Y."
3. Don't invent entries to fill a gap. One real change beats three filler ones.
4. Never write about the changelog itself — how it's made, how complete it is, what's coming to it. Customers came for the product.
5. The product is the subject, not us. "We now show you a bird's eye view" puts the company on stage in a document someone opened to read about the software.
6. Never frame the product as generating work for the reader. A queue, a backlog, "what's waiting on you" — each casts the reader as the bottleneck and argues against the agent we sell. Write what the agent produced, not what the reader now owes.
7. Don't narrate the reader's own actions. "Sign in and you land on…", "Navigate to…" — they know how they got there. Start at the news.
8. Name a feature the way the reader would, not the way the code does. "Fold," "emit," and "seed" are our words for our internals and reach the reader with nothing attached.
9. Plain subject-verb-object, and finish the sentence. No design-writer verbs — a table *lists*, it doesn't *sit*. And a verbless fragment ("Below that, every pull request across your repos.") only works when the elided verb carries over from the previous clause, which it usually doesn't.
10. Don't name tunable defaults. "Watches for three days" freezes a config value into the announcement; describe what happens and leave the current setting to the guide, unless the number itself is the promise.
11. Don't define by contrast with a past the reader never saw. "Without an @-mention" only lands for someone who knew the old requirement; a new reader learns nothing from the aside. Cut clauses whose only job is distinguishing from a prior mode.
12. No flourish. "No longer ends the story," "is the whole setup," "just works" — beats a copywriter lands, and the reader hears the copywriter. The register is a teammate stating facts. If a clause exists for rhythm rather than information, cut it.

## The scoring rubric

Score every candidate entry before writing it, and every existing entry when auditing.

| Score | Meaning |
|---|---|
| **5** | A capability they can use today. Changes what the product does for them. |
| **4** | Visible improvement to something they already use. |
| **3** | Real but narrow — matters to some customers, not all. |
| **2** | Polish. They would never have noticed the before-state. |
| **1** | An internal milestone, or a fix to breakage no customer experienced. |

**5–4: publish. 3: publish if it's the only entry carrying its category, otherwise consider merging. 2: merge into a neighbour or cut. 1: cut.**

Two failure modes the rubric is built to catch:

- **Fixes to unseen breakage.** "Sign-out revokes the session," "switching no longer signs you out." To a reader these don't say *we improved* — they say *we shipped bugs*. Always a 1. This is especially dense in any period predating real customers.
- **Reskins and rebuilds.** Score against what the customer could already do, not the size of the diff. A rebuilt page, a rename, or new chrome on an existing capability is a 2 however long it took to build.
- **Infrastructure milestones as achievements.** A datastore migration, a provisioning speedup, a query cost cap. Real wins for us; the customer-facing residue is thinner than the entry. Either find the residue and write *that* ("queries run over much longer windows") or cut it.

Also watch **fragmentation**: six dashboard entries in three months reads as a work log. Consolidate a run of small related changes into one entry that describes the resulting capability.

## Mechanics

One `<Update>` per shipped thing, newest first.

```mdx
<Update label="Email-inbox monitors" description="Aug 4, 2026" tags={["Monitors"]}>
  Every workspace gets an ingest address. Forward alert email from any vendor and it becomes telemetry a monitor can act on.
</Update>
```

- `label` — what shipped. Becomes the entry title *and* its permalink (`/changelog#episodes`), so it has to read as a name on its own. Rules 6 and 8 apply to the label, not just the body.
- `description` — the date, `Mon D, YYYY`. Dates must run strictly descending.
- `tags` — exactly one category. The set of tags across the file becomes the filter panel, so keep the vocabulary small and reuse existing tags rather than minting new ones. Multiple tags render run-together with no separator; don't.
- Body — one sentence, two if it earns it.

Changelog pages have **no table of contents**. Mintlify gives that right rail to the tag filter panel instead, so the label is not a navigation aid — it's a name and a permalink.

## Writing one

1. **Find what actually shipped.** `git log --oneline` in the product repo; `git log --grep="(#123)$"` pins a PR's real ship date. Read the diff or the route file — don't write from the PR title, which is written for reviewers.
2. **Verify the claim against the code at HEAD.** Entries go stale when a later PR changes the design. Check the current state, not the state when the feature landed. Names drift too: take the feature's name from the current docs page title or UI copy, and when a linked guide was renamed, fix the older entries still pointing at the old path — a stale label is cosmetic, a stale link 404s.
3. **Score it.** Below 3, stop — it doesn't go in.
4. **Draft, then self-audit** with the greps below.
5. **Publish and verify.**

## Self-audit

Run against `changelog.mdx` before committing. Each maps to a rule.

```bash
# rule 5 — company as subject
grep -niE '\bwe\b|\bour\b|\bus\b' changelog.mdx
# rule 6 — output framed as the reader's work
grep -niE 'queue|backlog|waiting on|to-?do|you (need|must|have) to' changelog.mdx
# rule 7 — narrating the reader's arrival
grep -niE '^\s*(signing|sign in|click|navigate|head (to|over)|go to)' changelog.mdx
# rule 8 — verbs from the codebase
grep -niE '\bfold(s|ed|ing)?\b|\bemit|\bseed|\bdraws\b|\bhydrat|\bdispatch' changelog.mdx
# dates strictly descending
grep -oE 'description="[^"]+"' changelog.mdx | sed 's/description="//;s/"//'
```

Read every hit rather than trusting the count — `folder` matches `fold`, and *dispatch* is ordinary English in an incident-management context.

## Publishing

Merging to `main` deploys to docs.onepatch.dev.

Mintlify **inlines `style.css` into the page and serves nothing at `/style.css`** — that URL 404s and never reflects a deploy. To confirm a change is live, grep the served page HTML:

```bash
curl -s https://docs.onepatch.dev/changelog | grep -c 'Email-inbox monitors'
```

For a CSS change, grep the same page HTML for a selector you added. To check a rule inside a media query the current window is too narrow to trigger, walk `document.styleSheets` → `cssRules` in the browser instead of resizing.
