// scripts/particles-bg.js
window.addEventListener('load', async () => {
  // Wait for everything to load, then check for tsParticles
  await new Promise(resolve => setTimeout(resolve, 200));
  
  if (typeof tsParticles === 'undefined') {
    console.error('tsParticles not loaded - check CDN or network');
    return;
  }

  console.log('tsParticles loaded successfully!');

  const loadParticles = async () => {
    const isDark = document.documentElement.getAttribute("data-bs-theme") === "dark";
    const particleColor = isDark ? "#b4c5e4" : "#3066be";

    await tsParticles.load("tsparticles", {
      background: { 
        color: "transparent" 
      },
      particles: {
        color: { 
          value: particleColor
        },
        links: {
          color: particleColor,
          distance: 120,
          enable: true,
          opacity: 0.4,
          width: 1
        },
        move: { 
          enable: true, 
          speed: 1.2,
          direction: "none",
          random: false,
          straight: false,
          outModes: "out"
        },
        number: { 
          value: 80, 
          density: { 
            enable: true, 
            area: 800 
          } 
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: "circle"
        },
        size: {
          value: { min: 1, max: 3 }
        }
      },
      interactivity: {
        events: {
          onHover: { 
            enable: true, 
            mode: "repulse" 
          },
          resize: true
        },
        modes: {
          repulse: { 
            distance: 100, 
            duration: 0.4 
          }
        }
      },
      detectRetina: true
    });
    
    console.log('Particles initialized!');
  };

  await loadParticles();

  // Theme toggle handlers
  const handleThemeToggle = async () => {
    const container = tsParticles.domItem(0);
    if (container) {
      await container.destroy();
    }
    setTimeout(loadParticles, 100);
  };

  document.getElementById("toggle-theme")?.addEventListener("click", handleThemeToggle);
  document.getElementById("toggle-theme-mobile")?.addEventListener("click", handleThemeToggle);
});