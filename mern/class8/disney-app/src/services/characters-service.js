import axios from "axios"

// api que trae todos los personajes
export const getCharacters = () => axios.get('https://api.disneyapi.dev/character');

// api que trae un sólo personaje
export const getOneCharacter = (id) => axios.get(`https://api.disneyapi.dev/character/${id}`);
