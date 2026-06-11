(function () {
  function tabLeft() {
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    if (path === "/" || path === "/index") return "docs";
    return document.querySelector("#page-title")?.textContent?.trim() || "docs";
  }

  function setTabTitle() {
    document.title = `${tabLeft()} — onepatch`;
  }

  setTabTitle();
  document.addEventListener("DOMContentLoaded", setTabTitle);
  window.addEventListener("popstate", setTabTitle);

  const observer = new MutationObserver(setTabTitle);
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
