(function () {
  function addFooterBrand() {
    const footer = document.getElementById("footer");
    if (!footer || footer.querySelector(".op-footer-brand")) return;

    const wrap = footer.querySelector(".flex") || footer;
    const brand = document.createElement("div");
    brand.className = "op-footer-brand logo";
    brand.innerHTML =
      '<span class="logo-mark" aria-hidden="true">' +
      '<img class="block dark:hidden" src="/logo/onepatch-logo-light.png" alt="onepatch" />' +
      '<img class="hidden dark:block" src="/logo/onepatch-logo.png" alt="onepatch" />' +
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
