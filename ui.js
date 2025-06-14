// ui.js
function renderCharacters(characters) {
  const container = document.getElementById('character-list');
  container.innerHTML = characters.map(character => `
    <div class="col-md-4 mb-4">
      <div class="card text-dark">
        <img src="${character.image}" class="card-img-top" alt="${character.name}">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <p class="card-text">Estado: ${character.status}</p>
        </div>
      </div>
    </div>
  `).join('');
}
