// github-projects.js
const username = "idevonic";
const projectGrid = document.getElementById("projectsGrid");

// Fetch latest 6 public repos (no token needed for public repos)
fetch(`https://api.github.com/users/${username}/repos?per_page=6&sort=updated`)
  .then(res => {
    console.log("GitHub API status:", res.status);
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    return res.json();
  })
  .then(repos => {
    console.log("Repos fetched:", repos); // Debug log
    projectGrid.innerHTML = ""; // Clear loading message

    const visibleRepos = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 6);

    if (visibleRepos.length === 0) {
      projectGrid.innerHTML = "<div class='text-muted text-center'>No public repos found.</div>";
      return;
    }

    visibleRepos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "project-card reveal";

      card.innerHTML = `
        <h3 class="h5 fw-semibold mb-2">${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank" class="fw-medium text-decoration-none">
          View on GitHub →
        </a>
      `;

      projectGrid.appendChild(card);
    });
  })
  .catch(err => {
    projectGrid.innerHTML = "<div class='text-danger text-center'>⚠️ Failed to load GitHub projects.</div>";
    console.error("GitHub API fetch error:", err);
  });