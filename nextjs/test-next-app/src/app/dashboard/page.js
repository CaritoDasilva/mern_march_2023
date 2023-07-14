"use client"
import { useEffect, useState } from "react";
import Loading from "./loading";
import { getCharacters } from "../services/characters-service";
// import { getCharacters } from "../services/characters-service";

const Dashboard = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Loading />
            <h1>Estoy en el Dashboard</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Sumar + 1</button>
            <button onClick={() => setCount(count - 1)}>Restar - 1</button>
        </div>
    )
};

export default Dashboard;
