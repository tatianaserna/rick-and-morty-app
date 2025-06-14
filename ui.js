// ui.js
function renderCharacters(characters) {
  const container = document.getElementById('character-list');
  container.innerHTML = characters.map(character => `
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card h-100 shadow">
        <img src="${character.image}" class="card-img-top" alt="${character.name}">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">
            <strong>Estado:</strong> ${character.status}<br>
            <strong>Especie:</strong> ${character.species}
          </p>
        </div>
      </div>
    </div>
  `).join('');
}
