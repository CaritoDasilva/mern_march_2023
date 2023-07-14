"use client"
import { useEffect, useState } from "react";
import styles from './page.module.scss'
import { getCharacters } from "@/app/services/characters-service";
import Link from "next/link";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    const getCharactersFromService = async () => {
        console.log('Hola')
        try {
            const list = await getCharacters();
            const listJson = await list.json();
            console.log("🚀 ~ file: page.js:15 ~ getCharactersFromService ~ list:", listJson)
            setCharacters(listJson.data);
            // console.log("🚀 ~ file: ListCharacters.js:10 ~ getCharactersFromService ~ list:", list)
        } catch (error) {
            console.log("🚀 ~ file: ListCharacters.js:11 ~ getCharactersFromService ~ error:", error)
        }
    }

    useEffect(() => {
        getCharactersFromService();
    }, []);
    return (
        <div>
            <h1>Estoy en el Characters</h1>
            {
                characters?.map((character, index) => (
                    <div key={index} className={styles["card"]}>
                        <Link href={`/dashboard/characters/${character._id}`}>
                            <h1>{character.name}</h1>
                            <img src={character.imageUrl} alt={`Imagen de ${character.name}`} />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
};

export default Characters;
