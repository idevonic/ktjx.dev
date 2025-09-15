// typewriter.js
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("about-typed");
  const rest = document.getElementById("about-rest");
  if (!target) return;

  const text =
    "I enjoy building and securing the digital foundations that keep people connected — from networks and servers to the cloud.";
  let i = 0;
  const speed = 40;

  // Make sure target is empty before starting
  target.textContent = "";

  // Remove any existing cursor if present
  let existingCursor = target.parentNode.querySelector('.cursor');
  if (existingCursor) existingCursor.remove();

  // Create a cursor element
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.textContent = "|";
  target.after(cursor);

  function typeWriter() {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      setTimeout(typeWriter, speed);
      i++;
    } else {
      // Flash cursor a bit then remove
      setTimeout(() => cursor.remove(), 800);
      if (rest) rest.classList.add("show");
    }
  }

  typeWriter();
});