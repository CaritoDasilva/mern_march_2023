import React, { useState } from 'react'
import { loginUser } from '../services/user-service'

export const LoginTask = () => {
    const [user, setUser] = useState({
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

    const loginUserFromService = (e) => {
        e.preventDefault()

        if (user.password === user.confirmPassword) {
            loginUser(user)
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
            <form onSubmit={loginUserFromService}>
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
                <input type="submit" value="Login" />
            </form>
        </>
    )
}
