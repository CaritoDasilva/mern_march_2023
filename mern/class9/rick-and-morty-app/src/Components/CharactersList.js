import React, { useState, useEffect } from "react";
import { getAllCharacters } from "../services/characters-service";
import { Space, Table, Tag, Image } from 'antd';
import styles from './CharactersList.module.scss';
import { Link } from "react-router-dom";

const CharactersList = () => {
    const [characters, setCharacters] = useState([]);

    const getCharactersFromService = async () => {
        try {
            const list = await getAllCharacters();
            console.log("🚀 ~ file: CharactersList.js:10 ~ getCharactersFromService ~ list:", list)
            setCharacters(list.data.results)
        } catch (error) {
            console.log("🚀 ~ file: CharactersList.js:96 ~ getCharactersFromService ~ error:", error)
            
        }

    }
    
    const columns = [
        {
            title: 'Nombre personaje',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Especie',
            dataIndex: 'species',
            key: 'species',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Imagen',
            dataIndex: 'image',
            key: 'image',
            render: (_, record) => (
                <Image
                    width={100}
                    src={record.image}
                />
            ),
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                    color = 'volcano';
                }
                return (
                    <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                    </Tag>
                );
                })}
            </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
            <Space size="middle">
                <Link to={`/personaje/${record.id}`}>Ver personaje {record.name}</Link>
                {/* <a>Delete</a> */}
            </Space>
            ),
        },
        ];

    const data = characters?.map((character, index) => ({
        key: character.id,
        name: character.name,
        species: character.species,
        status: character.status,
        tags: character.episode.slice(0, 2),
        image: character.image,
        id: character.id
    }));
    

    useEffect(() => {
        getCharactersFromService();
    }, []);

    return (
        <div className={styles["table-container"]}>
            <Table columns={columns} dataSource={data}/>

        </div>
    )


};

export default CharactersList;
