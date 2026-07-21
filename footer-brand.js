(function () {
  function addFooterBrand() {
    const footer = document.getElementById("footer");
    if (!footer || footer.querySelector(".op-footer-brand")) return;

    const wrap = footer.querySelector(".flex") || footer;
    const brand = document.createElement("div");
    brand.className = "op-footer-brand logo";
    // Theme swap is driven by style.css (`.dark` selector), not Tailwind's
    // `dark:hidden`/`dark:block` utilities: this markup is injected at runtime,
    // so the JIT compiler never emits those variants — and even the base
    // `hidden` utility is outspecified by our own `.logo-mark img` rule, so both
    // logos would render (the doubled-mark bug). Plain classes keep it robust.
    brand.innerHTML =
      '<span class="logo-mark" aria-hidden="true">' +
      '<img class="op-logo op-logo--light" src="/logo/onepatch-logo-light.png" alt="onepatch" />' +
      '<img class="op-logo op-logo--dark" src="/logo/onepatch-logo.png" alt="onepatch" />' +
      "</span>" +
      '<span class="word">onepatch<span class="op-footer-year">· 2026</span></span>';

    wrap.insertBefore(brand, wrap.firstChild);
  }

  function init() {
    addFooterBrand();
    // Mintlify is a client-routed SPA: it re-renders the footer (dropping our
    // brand row) on every in-app navigation, so the observer must stay live and
    // re-place it — not run only once at load. addFooterBrand is idempotent, so
    // re-runs on unrelated mutations are cheap no-ops.
    new MutationObserver(addFooterBrand).observe(document.body, {
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
