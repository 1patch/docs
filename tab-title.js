(function () {
  function tabLeft() {
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    if (path === "/" || path === "/index") return "docs";
    return document.querySelector("#page-title")?.textContent?.trim() || "docs";
  }

  function setTabTitle() {
    const next = `${tabLeft()} — onepatch`;
    // Guard: only write when changed, so our own write doesn't re-trigger the observer.
    if (document.title !== next) document.title = next;
  }

  function init() {
    setTabTitle();
    window.addEventListener("popstate", setTabTitle);

    // Mintlify/Next.js may replace the <title> element entirely, so watch
    // document.head (small subtree) rather than one title node.
    new MutationObserver(setTabTitle).observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
