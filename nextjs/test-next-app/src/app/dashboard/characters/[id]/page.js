"use client"

import { getOneCharacter } from "@/app/services/characters-service";
import { useEffect, useState } from "react";

const Character = ({ params }) => {
  const [character, setCharacter] = useState();
  const { id } = params;

  const getOneCharacterFromService = async () => {
        try {
            const newCharacter = await getOneCharacter(id);
            const newCharacterJson = await newCharacter.json();
            console.log("🚀 ~ file: DetailCharacter.js:11 ~ getOneCharacterFromService ~ newCharacter:", newCharacter)
            setCharacter(newCharacterJson.data);
        } catch (error) {
            console.log("🚀 ~ file: DetailCharacter.js:11 ~ getOneCharacterFromService ~ error:", error)
            
        }
    }

    useEffect(() => {
        getOneCharacterFromService();
    }, [id]);

  return (
    <div>
      {
        character && (
            <div>
                <h1>{character.name}</h1>
                <img src={character.imageUrl} alt={`Imagen de ${character.name}`} />
            </div>
        )
      }
    </div>
  )
};

export default Character;
