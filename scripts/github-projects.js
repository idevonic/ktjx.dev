// scripts/github-projects.js

const username = "idevonic";
const projectGrid = document.getElementById("projectsGrid");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => {
    projectGrid.innerHTML = ""; // Clear loading message

    repos
      .filter(repo => !repo.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .forEach((repo, index) => {
        const delay = 100 + index * 100;

        const card = document.createElement("div");
        card.className = "project-card";
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-delay", delay);

        card.innerHTML = `
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description provided."}</p>
          <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;

        projectGrid.appendChild(card);
      });
  })
  .catch(err => {
    projectGrid.innerHTML = "<p>⚠️ Failed to load GitHub projects.</p>";
    console.error(err);
  });
