
// api que trae todos los personajes
export const getCharacters = () => fetch('https://api.disneyapi.dev/character');

// api que trae un sólo personaje
export const getOneCharacter = (id) => fetch(`https://api.disneyapi.dev/character/${id}`);
