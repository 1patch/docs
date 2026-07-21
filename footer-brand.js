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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addFooterBrand);
  } else {
    addFooterBrand();
  }
})();
