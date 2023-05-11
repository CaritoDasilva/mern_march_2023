import React, { useState, useEffect } from "react";
import { getOneSingleCharacter } from "../services/characters-service";
import { useParams } from "react-router-dom";
import { Image, Card } from "antd";

const { Meta } = Card;


const DetailCharacter = () => {
    const [character, setCharacter] = useState();
    const { id } = useParams();
    console.log("🚀 ~ file: DetailCharacter.js:12 ~ DetailCharacter ~ useParams:", useParams())

    const getCharacterFromService = async () => {
        try {
            const characterFromService = await getOneSingleCharacter(id);
            setCharacter(characterFromService.data)
            console.log("🚀 ~ file: DetailCharacter.js:10 ~ getCharacterFromService ~ characterFromService:", characterFromService)
        } catch (error) {
            console.log("🚀 ~ file: DetailCharacter.js:12 ~ getCharacterFromService ~ error:", error)
            
        }
    }

    useEffect(() => {
        getCharacterFromService();
    }, [id])

    return (
        <div>
            {
                character && (
                    <Card
                        hoverable
                        style={{
                        width: 240,
                        }}
                        cover={<img alt="example" src={character.image} />}
                    >
                        <Meta 
                            title={character.name} 
                            description={`Especie: ${character.species}, Status: ${character.status}`} 
                        />
                    </Card>
                )
            }
        </div>
    )

};

export default DetailCharacter;
