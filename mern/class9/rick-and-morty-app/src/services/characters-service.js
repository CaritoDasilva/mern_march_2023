import axios from "axios";

export const getAllCharacters = () => axios.get('https://rickandmortyapi.com/api/character');

export const getOneSingleCharacter = (id) => axios.get(`https://rickandmortyapi.com/api/character/${id}`)
