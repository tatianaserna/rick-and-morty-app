// ui.js
function renderCharacters(characters) {
  const container = document.getElementById('character-list');
  container.innerHTML = characters.map(character => `
    <div class="col-md-4 col-lg-3">
      <div class="card h-100 shadow-lg border-0 rounded-4 overflow-hidden">
        <img src="${character.image}" class="card-img-top" alt="${character.name}">
        <div class="card-body bg-light">
          <h5 class="card-title text-primary">${character.name}</h5>
          <p class="card-text">
            <span class="badge bg-${character.status === 'Alive' ? 'success' : 'danger'}">
              ${character.status}
            </span><br>
            <small class="text-muted">${character.species}</small>
          </p>
        </div>
      </div>
    </div>
  `).join('');
}
