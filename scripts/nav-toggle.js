// nav-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("toggle-theme");
  const themeBtnMobile = document.getElementById("toggle-theme-mobile");

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    const icon = theme === "dark" ? "☀️" : "🌙";
    if (themeBtn) themeBtn.textContent = icon;
    if (themeBtnMobile) themeBtnMobile.textContent = icon;
    localStorage.setItem("theme", theme);
  };

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) setTheme(savedTheme);
  else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
  else setTheme("light");

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-bs-theme");
    setTheme(current === "dark" ? "light" : "dark");
  };

  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
  if (themeBtnMobile) themeBtnMobile.addEventListener("click", toggleTheme);
});
