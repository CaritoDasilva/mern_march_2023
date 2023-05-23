import React, { useState ,useEffect } from 'react';
import { deleteTask, getTasks } from '../services/task-service';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [tasks, setTasks] = useState([]);

    const getTasksFromService = async () => {
        try {
            const list = await getTasks();
            console.log("🚀 ~ file: Home.js:10 ~ getTasksFromService ~ list:", list);
            setTasks(list.data.tasks);
        } catch (error) {
            console.log("🚀 ~ file: Home.js:12 ~ getTasksFromService ~ error:", error); 
        }
    }

    const status = {
        'in-progress': 'En Progreso',
        'finished': 'Completada',
        'started': 'Pendiente'
    }

    const removeTask = async (id) => {
        try {
            const response = await deleteTask(id);
            console.log("🚀 ~ file: Home.js:26 ~ removeTask ~ response:", response)
            const newTaskList = tasks.filter((task) => task._id !== id);
            setTasks(newTaskList);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getTasksFromService();
    },[])

    return (
        <div className={styles['home-container']}>
            <Row className="justify-content-md-center">
                <Col xs={{span: 3, offset: 3}}>
                    <Button variant="info">
                        <Link to={'/crear-tarea'} className={styles['link']}>
                            Crear Tarea
                        </Link>
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={6}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Status</th>
                            <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { tasks?.map((task) => (
                                <tr key={task._id}>
                                    <td>{ task.title }</td>
                                    <td>{task.description}</td>
                                    <td>{status[task.status]}</td>
                                    <td>
                                        <Button variant="link">
                                            <Link to={`/editar-tarea/${task._id}`} className={styles['link']}>Editar</Link>
                                        </Button>
                                        <Button className="btn btn-danger" onClick={() => removeTask(task._id)}>Eliminar</Button>
                                    </td>
                                </tr>
                            )) }
                            
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
    )

};
