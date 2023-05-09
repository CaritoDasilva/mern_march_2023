import React, { useState, useEffect } from "react";
import { getCharacters } from "../services/characters-service";
import styles from './ListCharacters.module.scss';
import { Link } from "react-router-dom";

const ListCharacters = () => {
    const [characters, setCharacters] = useState([]);

    const getCharactersFromService = async () => {
        try {
            const list = await getCharacters();
            setCharacters(list.data.data);
            console.log("🚀 ~ file: ListCharacters.js:10 ~ getCharactersFromService ~ list:", list)
        } catch (error) {
            console.log("🚀 ~ file: ListCharacters.js:11 ~ getCharactersFromService ~ error:", error)
        }
    }

    useEffect(() => {
        getCharactersFromService();
    }, []);

    return (
        <div className={styles["card-container"]}>
            {
                characters?.map((character, index) => (
                    <div key={index} className={styles["card"]}>
                        <Link to={`/personaje/${character._id}`}>
                            <h1>{character.name}</h1>
                            <img src={character.imageUrl} alt={`Imagen de ${character.name}`} />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default ListCharacters;
