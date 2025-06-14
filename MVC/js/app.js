// app.js
document.addEventListener('DOMContentLoaded', async () => {
  const characters = await fetchCharacters();
  renderCharacters(characters);
});
