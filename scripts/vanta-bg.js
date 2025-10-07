// scripts/vanta-bg.js
window.addEventListener('load', () => {
  if (typeof VANTA === 'undefined') {
    console.error('VANTA not loaded - check CDN');
    return;
  }

  let vantaEffect = null;

  const initVanta = () => {
    if (vantaEffect) {
      vantaEffect.destroy();
    }

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
      color: isDark ? 0x6b9bd8 : 0x3066be,
      backgroundColor: isDark ? 0x1b1e2a : 0xfbfff1,
      points: 10,
      maxDistance: 20,
      spacing: 15,
      showDots: true,
      speed: 1.8       // 💨 Increase this value for faster animation (try 0.5–3.0 range)
});


    console.log('Vanta.js initialized with your theme colors!');
  };

  initVanta();

  document.getElementById("toggle-theme")?.addEventListener("click", () => {
    setTimeout(initVanta, 100);
  });
  
  document.getElementById("toggle-theme-mobile")?.addEventListener("click", () => {
    setTimeout(initVanta, 100);
  });
});