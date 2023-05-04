import React, { useState, useEffect } from "react";
import styles from './FormRegister.module.scss';

const FormRegister = ({ users, setUsers }) => {
    const [userInfo, setUserInfo] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
        picProfile: '',
        descriptionProfile: '',
    });
    const [userInfoError, setUserInfoError] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
        picProfile: '',
        descriptionProfile: '',
    });
    const [errorForm, setErrorForm] = useState('');


    const handleOnchange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        })
    };

    const validations = {
        userName: userInfo.userName.length > 10,
        password: userInfo.password !== userInfo.confirmPassword,
        confirmPassword: userInfo.confirmPassword !== userInfo.password,
        descriptionProfile: userInfo.descriptionProfile.length < 3 || userInfo.descriptionProfile.length > 100
    }

    const handleValidations = (e) => {
        console.log("🚀 ~ file: FormRegister.js:52 ~ handleValidations ~ e:", e.target)

        const { target } = e;
        const { name, value } = target;
        console.log("🚀 ~ file: FormRegister.js:42 ~ handleValidations ~ validations[name]:", validations[name])
        if(validations[name]) {
            
            setUserInfoError({
                ...userInfoError,
                [name]: `Hay un error en el campo ${name}`,
            })
        } else {
            setUserInfoError({
                ...userInfoError,
                [name]: '',
            })
        }

    }

    const onSubmit = (e) => {
        e.preventDefault();
        const hasError = Object.values(userInfoError).filter(err => err !== '');
        if (hasError.length > 0) {
            setErrorForm('Revisa tu formulario');
        } else {
            setUsers([...users, userInfo]);
            setErrorForm('');
            setUserInfo({
                userName: '',
                password: '',
                confirmPassword: '',
                picProfile: '',
                descriptionProfile: '',
            });
            setUserInfoError({
                userName: '',
                password: '',
                confirmPassword: '',
                picProfile: '',
                descriptionProfile: '',
            })
        }

    }

    useEffect(() => {

        console.log("🚀 ~ file: FormRegister.js:58 ~ FormRegister ~ userInfoError:", userInfoError)
    }, [userInfoError])


    return (
        <div className={styles["form-container"]}>
            <form onSubmit={onSubmit}>
                <label htmlFor="userName">Nombre de usuario</label>
                <input 
                    type="text" 
                    value={userInfo.userName} 
                    name="userName" 
                    onChange={handleOnchange} 
                    onBlur={handleValidations} 
                />
                {userInfoError.userName !== '' && (
                    <p className={styles["msg-error"]}>{userInfoError.userName}</p>
                )}
                <label htmlFor="picProfile">Foto de perfil</label>
                <input 
                    type="text" 
                    value={userInfo.picProfile} 
                    name="picProfile" 
                    onChange={handleOnchange} 
                    onBlur={handleValidations}
                />
                {userInfoError.picProfile !== '' && (
                    <p className={styles["msg-error"]}>{userInfoError.picProfile}</p>
                )}
                <label htmlFor="descriptionProfile">Cuéntanos quién eres?</label>
                <textarea 
                    name="descriptionProfile" 
                    value={userInfo.descriptionProfile} 
                    onChange={handleOnchange} 
                    id="" 
                    cols="30" 
                    rows="10"
                    onBlur={handleValidations}
                ></textarea>
                {userInfoError.descriptionProfile !== '' && (
                    <p className={styles["msg-error"]}>{userInfoError.descriptionProfile}</p>
                )}
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    value={userInfo.password} 
                    name="password" 
                    onChange={handleOnchange} 
                    onBlur={handleValidations}
                />
                    
                {userInfoError.password !== '' && (
                    <p className={styles["msg-error"]}>{userInfoError.password}</p>
                )}
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input 
                    type="password" 
                    value={userInfo.confirmPassword} 
                    name="confirmPassword" 
                    onChange={handleOnchange} 
                    onBlur={handleValidations}
                />
                    
                {userInfoError.confirmPassword !== '' && (
                    <p className={styles["msg-error"]}>{userInfoError.confirmPassword}</p>
                )}
                <button type="submit">Registrar</button>
            </form>
        </div>
    )

};

export default FormRegister;
