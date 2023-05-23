import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './FormTask.module.scss';
import { createTask, getTask, updateTask } from "../services/task-service";
import { useNavigate, useParams } from "react-router-dom";

const FormTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // Agregar validaciones
    // Todos los campos son requeridos
    // El título debe tener al menos 3 caracteres
    // La descripción debe menos de 10 caracteres
    // Las validaciones del back deben ser las mismas y mostrar los mensajes de error en el front
    const [task, setTask] = useState({
        title: "",
        description: "",
        status: "started",
    });

    const handlerForm = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const sendTask = async (e) => {
        try {
            e.preventDefault();
            const response = !id ? await createTask(task) : await updateTask(id, task);
            console.log("🚀 ~ file: FormTask.js:26 ~ sendTask ~ response:", response)
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    }

    const getTaskFromService = async () => {
        try {
            const response = await getTask(id);
            console.log("🚀 ~ file: FormTask.js:38 ~ getTaskFromService ~ response:", response)
            setTask(response.data.task);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        if (id) getTaskFromService();
    }, [id])

    return (
        <div className={styles['form-container']}>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form onSubmit={sendTask}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Título</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={task.title} 
                                name="title" 
                                placeholder="Ingresar título de la tarea" 
                                onChange={handlerForm}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={task.description} 
                                name="description" 
                                placeholder="Ingresar descripción de la tarea" 
                                onChange={handlerForm}
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Status</Form.Label>
                            <Form.Select 
                                aria-label="status" 
                                value={task.status} 
                                name="status" 
                                defaultValue="started"
                                onChange={handlerForm}
                            >
                                <option value="started">Pendiente</option>
                                <option value="in-progress">En progreso</option>
                                <option value="finished">Terminada</option>
                            </Form.Select>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            
        </div>
    )
}

export default FormTask;
