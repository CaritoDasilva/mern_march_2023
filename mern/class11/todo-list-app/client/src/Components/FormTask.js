import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './FormTask.module.scss';
import { createTask, getTask, updateTask } from "../services/task-service";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import Alert from 'react-bootstrap/Alert';

const FormTask = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [errores, setError] = useState({});
    // Agregar validaciones
    // Todos los campos son requeridos
    // El título debe tener al menos 3 caracteres
    // La descripción debe menos de 10 caracteres
    // Las validaciones del back deben ser las mismas y mostrar los mensajes de error en el front
   
    //formik 
    const validationSchema = Yup.object({
        title: Yup.string().required('El título es requerido').min(3, 'El título debe tener al menos 3 caracteres'),
        description: Yup.string().required('La descripción es requerida').min(5, 'La descripción debe tener menos de 5 caracteres'),
    })

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            status: 'Pendiente'
        },
        validationSchema, 
        onSubmit: async (values) => {
            console.log(values);
            try {
                const response = !id ? await createTask(values) : await updateTask(id, values);
                console.log("🚀 ~ file: FormTask.js:26 ~ sendTask ~ response:", response)
                navigate('/home');
            } catch (error) {
                console.log(error);
                console.log(error.response.data.error.errors);
                const myError = error.response.data.error.errors;
                console.log(myError);
                setError({
                    title: myError.title ? myError.title.message : '',
                    description: myError.description ? myError.description.message : '',
                });
                console.log(errores);
            }
        }
    })

    const { handleSubmit, handleChange, handleBlur, setFieldTouched, values, errors, touched} = formik;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(e);
        setFieldTouched(name, true);
    };

    //codigo profe
    /* const [task, setTask] = useState({
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
 */
    return (
        <div className={styles['form-container']}>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Título</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={values.title} 
                                name="title" 
                                placeholder="Ingresar título de la tarea" 
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                className={touched.title && errors.title ? "is-invalid" : ""}
                                
                                
                            />
                            {touched.title && errors.title && <div className="invalid-feedback">{errors.title}</div>}
                            {errores.title && <Alert variant="danger">{errores.title}</Alert>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={values.description} 
                                name="description" 
                                placeholder="Ingresar descripción de la tarea" 
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                className={touched.description && errors.description ? "is-invalid" : ""}
                            
                            />
                            {touched.description && errors.description && <div className="invalid-feedback">{errors.description}</div>}
                            {errores.description && <Alert variant="danger">{errores.description}</Alert>}

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Status</Form.Label>
                            <Form.Select 
                                aria-label="status" 
                                value={values.status} 
                                name="status" 
                                defaultValue="Pendiente"
                                onChange={handleInputChange}
                                className={touched.status && errors.status ? "is-invalid" : ""}
                                
                            >
                                {touched.status && errors.status && <div className="invalid-feedback">{errors.status}</div>}
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
