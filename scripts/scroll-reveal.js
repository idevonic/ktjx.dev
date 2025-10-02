// scripts/scroll-reveal.js (fixed)
document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      const el = entry.target;
      if (entry.isIntersecting) {
        const delay = parseFloat(el.dataset.revealDelay) || Math.random() * 100;
        setTimeout(() => el.classList.add("reveal-show"), delay);

        // ✅ If this element is inside a .timeline-item — mark it as shown
        const parentItem = el.closest(".timeline-item");
        if (parentItem) parentItem.classList.add("show");

        // ✅ Handle staggered children too
        const children = el.querySelectorAll("[data-reveal-child]");
        if (children.length > 0) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add("reveal-show"), i * 100 + delay);
          });
        }

        obs.unobserve(el);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px"
  });

  revealEls.forEach(el => observer.observe(el));
});

