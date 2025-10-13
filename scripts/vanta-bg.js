// scripts/vanta-bg.js
window.addEventListener('load', () => {
  if (typeof VANTA === 'undefined') {
    console.error('VANTA not loaded - check CDN');
    return;
  }

  let vantaEffect = null;

  const initVanta = () => {
    if (vantaEffect) vantaEffect.destroy();

    const isDark = document.documentElement.getAttribute("data-bs-theme") === "dark";

    vantaEffect = VANTA.NET({
      el: "#vanta-bg",
      mouseControls: false,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,

      // 🎨 Colors
      color: isDark ? 0x6b9bd8 : 0x3066be,
      backgroundColor: isDark ? 0x1b1e2a : 0xfbfff1,

      // 🧩 Motion & visual feel
      points: 7,          // fewer points for calmer animation
      maxDistance: 25,    // longer lines, less movement
      spacing: 20,        // more space between nodes
      showDots: false,    // hide dots for smoother aesthetic
      speed: 0.15,        // reduced motion speed (0.1–0.3 range feels chill)
    });

    console.log('Vanta.js initialized with calm settings ✨');
  };

  initVanta();

  // Reinit when theme toggled
  document.getElementById("toggle-theme")?.addEventListener("click", () => {
    setTimeout(initVanta, 150);
  });

  document.getElementById("toggle-theme-mobile")?.addEventListener("click", () => {
    setTimeout(initVanta, 150);
  });
});
