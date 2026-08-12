# OnePatch docs

Mintlify. Merging to `main` deploys to docs.onepatch.dev.

## Changelog

### Why it reads the way it does

The reader is a technical person scanning for something that changes their day. They give an entry a title and one line before deciding to move on.

In that space, describing what the product does beats asserting what it's worth — a description is checkable and a claim isn't. "The pull requests the agent has opened, each with the monitor history that prompted it" can be verified in thirty seconds. "Triage faster" can only be taken on faith, and the readers worth having won't.

So the agent's output is the subject of the sentence. Not us, and not the reader's obligations. Everything below follows from that.

### Mechanics

One `<Update>` per shipped thing, newest first. `label` is what shipped — it becomes the entry title and its permalink (`/changelog#episodes`), so it has to read as a name on its own. `description` is the date. `tags` is one category, and the set of tags becomes the filter panel, so keep the vocabulary small. Body is one sentence, two if it earns it.

Mintlify inlines `style.css` into the page and serves nothing at `/style.css` — to check a CSS change is live, grep the served page HTML for a selector you added.

### Rules

1. No announcement voice. Never "we're excited," "introducing," "say hello to."
2. No three-beat cadence ("faster, simpler, and more reliable") and no "not just X, but Y."
3. Don't invent entries to fill a gap. One real change beats three filler ones.
4. Never write about the changelog itself — how it's made, how complete it is, what's coming to it. Customers came for the product.
5. The product is the subject, not us. "We now show you a bird's eye view" puts the company on stage in a document someone opened to read about the software.
6. Never frame the product as generating work for the reader. A queue, a backlog, "what's waiting on you" — each casts the reader as the bottleneck and argues against the agent we sell. Write what the agent produced, not what the reader now owes.
7. Don't narrate the reader's own actions. "Sign in and you land on…", "Navigate to…" — they know how they got there. Start at the news.
8. Name a feature the way the reader would, not the way the code does. "Fold," "emit," and "seed" are our words for our internals and reach the reader with nothing attached.
9. Plain subject-verb-object, and finish the sentence. No design-writer verbs — a table *lists*, it doesn't *sit*. And a verbless fragment ("Below that, every pull request across your repos.") only works when the elided verb carries over from the previous clause, which it usually doesn't.
