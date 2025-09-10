(function () {
  function mountLucide() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }
  document.addEventListener('DOMContentLoaded', mountLucide);
  document.addEventListener('navigation', mountLucide); // mkdocs-material SPA
})();