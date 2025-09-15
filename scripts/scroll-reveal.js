// scroll-reveal.js
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px"
  };


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal, .project-card, .skill-icon, .timeline-item").forEach((el) => {
    observer.observe(el);
  });
});
