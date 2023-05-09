import React, { useState, useEffect } from "react";
import { getOneCharacter } from "../services/characters-service";
import { useParams } from 'react-router-dom';

const DetailCharacter = () => {
    const [character, setCharacter] = useState();
    const { id } = useParams();
    const getOneCharacterFromService = async () => {
        try {
            const newCharacter = await getOneCharacter(id);
            console.log("🚀 ~ file: DetailCharacter.js:11 ~ getOneCharacterFromService ~ newCharacter:", newCharacter)
            setCharacter(newCharacter.data.data);
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
}

export default DetailCharacter;
