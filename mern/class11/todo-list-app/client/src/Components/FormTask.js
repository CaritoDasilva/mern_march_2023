import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './FormTask.module.scss'
import { createTask, /*getTask,*/ updateTask } from '../services/task-service'
import { useNavigate, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const FormTask = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [errores, setError] = useState({})
    // Agregar validaciones
    const validationSchema = Yup.object().shape({
        title: Yup.string().required('El título es requerido').min(3, 'El título debe tener al menos 3 caracteres'),
        description: Yup.string().required('La descripción es requerida').max(10, 'La descripción debe tener menos de 10 caracteres'),
    })
    // Todos los campos son requeridos
    // El título debe tener al menos 3 caracteres
    // La descripción debe menos de 10 caracteres
    // Las validaciones del back deben ser las mismas y mostrar los mensajes de error en el front

    // const [task, setTask] = useState({
    //     title: '',
    //     description: '',
    //     status: 'started',
    // })

    // const handlerForm = (e) => {
    //     setTask({
    //         ...task,
    //         [e.target.name]: e.target.value,
    //     })
    // }

    // const sendTask = async (e) => {
    //     try {
    //         e.preventDefault()
    //         const response = !id ? await createTask(task) : await updateTask(id, task)
    //         console.log('🚀 ~ file: FormTask.js:26 ~ sendTask ~ response:', response)
    //         navigate('/home')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const getTaskFromService = async () => {
    //     try {
    //         const response = await getTask(id)
    //         console.log('🚀 ~ file: FormTask.js:38 ~ getTaskFromService ~ response:', response)
    //         setTask(response.data.task)
    //     } catch (error) {
    //         console.log(error.response.data)
    //     }
    // }

    // useEffect(() => {
    //     if (id) getTaskFromService()
    // }, [id])

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            status: 'started',
        } /*
        validationSchema,*/,
        onSubmit: async (values) => {
            try {
                const response = !id ? await createTask(values) : await updateTask(id, values)
                console.log('🚀 ~ file: FormTask.js:26 ~ sendTask ~ response:', response)
                navigate('/home')
            } catch (error) {
                const myError = error.response.data.error.errors
                console.log(myError)
                setError({
                    title: myError.title ? myError.title.message : '',
                    description: myError.description ? myError.description.message : '',
                    status: myError.status ? myError.status.message : '',
                })
                console.log(errores)
            }
        },
    })

    const { handleSubmit, handleChange, values, errors, touched } = formik

    return (
        <div className={styles['form-container']}>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" name="title" placeholder="Ingresar título de la tarea" onChange={handleChange} value={values.title} isInvalid={touched.title && (!!errors.title || errores.title)} />
                            {touched.title && (errors.title || errores.title) && <Form.Control.Feedback type="invalid">{errors.title || errores.title}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" name="description" placeholder="Ingresar descripción de la tarea" onChange={handleChange} value={values.description} isInvalid={touched.description && (!!errors.description || errores.description)} />
                            {touched.description && (errors.description || errores.description) && <Form.Control.Feedback type="invalid">{errors.description || errores.description}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Status</Form.Label>
                            <Form.Select aria-label="status" name="status" defaultValue="started" onChange={handleChange} value={values.status}>
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

export default FormTask
