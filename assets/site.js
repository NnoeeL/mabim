(() => {
  const targets = [
    ".container > header",
    ".container > section",
    ".gallery-shell > *",
    ".board-layout > section",
    ".page > .title-wrap",
    ".page > .layout",
    ".wrap > .hero-banner",
    ".wrap > h1",
    ".wrap > .subtitle",
    ".wrap > .game-grid",
    ".wrap > .nav-wrap",
    "body > .game-shell"
  ].join(",");
  const elements = [...document.querySelectorAll(targets)];

  if (!elements.length) return;

  elements.forEach((element, index) => {
    element.setAttribute("data-reveal", "");
    element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 90}ms`);
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  document.documentElement.classList.add("reveal-ready");
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

  elements.forEach((element) => observer.observe(element));
  window.setTimeout(() => elements.forEach((element) => element.classList.add("is-visible")), 1400);
})();