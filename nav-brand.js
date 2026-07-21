(function () {
  // Full logo lockup in the top-left nav. Mintlify's `logo` (docs.json) renders
  // only the mark; this appends the "onepatch" wordmark to its right so the
  // header reads as the whole logo — matching the footer brand row
  // (footer-brand.js) and the marketing/blog header (mark + "onepatch"). Type
  // and spacing live in style.css (.op-nav-word); this only places the node.
  function ensureNavWord() {
    const img = document.querySelector("img.nav-logo");
    if (!img) return;
    const a = img.closest("a");
    if (!a || a.querySelector(".op-nav-word")) return;

    const word = document.createElement("span");
    word.className = "op-nav-word";
    word.textContent = "onepatch";
    a.classList.add("op-nav-lockup");
    // Append as the LAST child so it renders to the right of whichever mark is
    // visible — the anchor holds both the light and dark <img>.
    a.appendChild(word);
  }

  function init() {
    ensureNavWord();
    // Mintlify is a client-routed SPA: it re-renders the header (dropping our
    // node) on every in-app navigation, so the observer must stay live and
    // re-place the wordmark — not disconnect after the first run. ensureNavWord
    // is idempotent, so re-runs on unrelated mutations are cheap no-ops.
    new MutationObserver(ensureNavWord).observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
