// api.js
const API_URL = 'https://rickandmortyapi.com/api/character';

async function fetchCharacters() {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results;
}
