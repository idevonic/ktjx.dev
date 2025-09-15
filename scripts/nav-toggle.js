// nav-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("toggle-theme");
  const themeBtnMobile = document.getElementById("toggle-theme-mobile");

  function setTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
    // Optional: update the icon
    if (themeBtn) themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
    if (themeBtnMobile) themeBtnMobile.textContent = theme === "dark" ? "☀️" : "🌙";
    // Optional: persist to localStorage
    localStorage.setItem("theme", theme);
  }

  // On first load, pick saved or system theme
  const saved = localStorage.getItem("theme");
  if (saved) setTheme(saved);
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");

  // Toggle actions
  if (themeBtn) themeBtn.onclick = () => {
    const next = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    setTheme(next);
  };
  if (themeBtnMobile) themeBtnMobile.onclick = () => {
    const next = document.documentElement.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    setTheme(next);
  };
});