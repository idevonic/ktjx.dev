// scripts/github-projects.js
async function loadGitHubProjects() {
  const container = document.getElementById('github-projects');
  
  if (!container) {
    console.log('No github-projects container found');
    return;
  }

  try {
    const response = await fetch('https://api.github.com/users/idevonic/repos?per_page=6&sort=updated');
    
    console.log('GitHub API status:', response.status);
    
    if (!response.ok) {
      if (response.status === 403) {
        container.innerHTML = `
          <div class="text-center p-4">
            <p class="text-muted mb-3">GitHub API rate limit reached</p>
            <a href="https://github.com/idevonic" target="_blank" class="btn btn-primary">
              Visit My GitHub Profile
            </a>
          </div>
        `;
        return;
      }
      throw new Error(`HTTP ${response.status}`);
    }

    const repos = await response.json();
    
    if (repos.length === 0) {
      container.innerHTML = '<p class="text-muted text-center">No projects found.</p>';
      return;
    }

    container.innerHTML = repos.map(repo => `
      <div class="project-card">
        <div class="project-card-body">
          <h5>${repo.name}</h5>
          <p>${repo.description || 'No description available'}</p>
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
            View Project
          </a>
        </div>
      </div>
    `).join('');

  } catch (error) {
    console.error('GitHub projects error:', error);
    container.innerHTML = `
      <div class="text-center p-4">
        <p class="text-muted mb-3">Unable to load projects</p>
        <a href="https://github.com/idevonic" target="_blank" class="btn btn-primary">
          Visit My GitHub Profile
        </a>
      </div>
    `;
  }
}

if (document.getElementById('github-projects')) {
  document.addEventListener('DOMContentLoaded', loadGitHubProjects);
}