import React, { useState ,useEffect } from 'react';
import { getTasks } from '../services/task-service';

export const Home = () => {
    const [tasks, setTasks] = useState([]);

    const getTasksFromService = async () => {
        try {
            const list = await getTasks();
            console.log("🚀 ~ file: Home.js:10 ~ getTasksFromService ~ list:", list);
            
        } catch (error) {
            console.log("🚀 ~ file: Home.js:12 ~ getTasksFromService ~ error:", error); 
        }
    }

    useEffect(() => {
        getTasksFromService();
    },[])

    return (
        <div>
            { tasks?.map((task) => (
                <div key={task._id}>
                    { task.title }
                </div>
            )) }
        </div>
    )

};
