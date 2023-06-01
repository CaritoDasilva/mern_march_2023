import React, { useState } from 'react'
import { registerUser } from '../services/user-service'

export const RegisterTask = () => {
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [passwordMatchError, setPasswordMatchError] = useState(false)

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const createUserFromService = (e) => {
        e.preventDefault()

        if (user.password === user.confirmPassword) {
            registerUser(user)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            setPasswordMatchError(true)
            console.log('Las contraseñas no coinciden')
        }
    }

    return (
        <>
            <form onSubmit={createUserFromService}>
                <div>
                    <label htmlFor="">Nombre Completo:</label>
                    <input type="text" name="fullName" onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="">Correo:</label>
                    <input type="text" name="email" onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="">Contraseña:</label>
                    <input type="text" name="password" onChange={handleInputChange} />
                </div>
                <div>
                    <label htmlFor="">Confirma Contraseña:</label>
                    <input type="text" name="confirmPassword" onChange={handleInputChange} />
                    {passwordMatchError && <p>Las contraseñas no coinciden</p>}
                </div>
                <input type="submit" value="Registrar" />
            </form>
        </>
    )
}
