import React, { useState } from "react";
import styles from './FormRegister.module.scss';
import {Formik, Form, Field} from 'formik';

const FormRegister = () => {
    const[formularioEnviado, setFormularioEnviado] = useState(false);
   return (
        <div className={styles["form-container"]}>
            <Formik
                initialValues={{
                    userName: '',
                    password: '',
                    confirmPassword: '',
                    picProfile: '',
                    descriptionProfile: '',
                }}

                validate={(valores)=>{
                   let errores={};
                   if(valores.userName.length > 10){
                        errores.userName= 'El Nombre de Usuario Tiene que tener Minimo 10 Caracteres';
                    }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.userName)){
                        errores.userName= 'El Nombre Solo Debe Contener Letras y Espacios'
                    }

                    if(valores.password.length > 8){
                        errores.password= 'La contraseña debe Tener Minimo 8 Caracteres';
                    }

                    if(valores.confirmPassword.length !== valores.password.length ){
                        errores.confirmPassword= 'El Campo "Confirmar Contraseña" no coincide con Contraseña';
                    }

                    if(valores.descriptionProfile.length < 3 || valores.descriptionProfile.length > 50){
                        errores.descriptionProfile= 'El Campo "Cuentanos Quien Eres" Debe Tener Minimo 3 Caracteres y Maximo 50 caracteres';
                    }
                    
                    if(valores.picProfile.length > 30){
                        errores.picProfile= 'El Campo "Foto Del Perfil" Debe Tener Minimo 30 Caracteres';
                    }
                    
                 return errores;
                }}

                onSubmit={(valores, {resetForm}) =>{
                    resetForm();
                    console.log(valores)
                 console.log('formulario enviado')
                 setFormularioEnviado(true);
                 setTimeout(()=> setFormularioEnviado(false), 3000);
                }}
            >
                {( { touched, errors} )=> (
                   <Form>
                    
                        <label htmlFor="userName">Nombre de Usuario</label>
                        <Field 
                            type="text" 
                            name="userName" 
                            id="userName"
                            
                        />
                        {touched.userName && errors.userName && <div className={styles["msg-error"]}>{errors.userName}</div>}
                    
                        <label htmlFor="picProfile">Foto de Perfil</label>
                        <Field 
                            type="text" 
                            name="picProfile" 
                            id="picProfile"
                            
                        />
                        {touched.picProfile && errors.picProfile && <div className={styles["msg-error"]}>{errors.picProfile}</div>}
                    
                        <label htmlFor="descriptionProfile">Cuéntanos quién Eres?</label>
                        <Field
                            name="descriptionProfile" 
                            id="descriptionProfile" 
                            cols="30" 
                            rows="10"
                            
                        ></Field>
                        {touched.descriptionProfile && errors.descriptionProfile && <div className={styles["msg-error"]}>{errors.descriptionProfile}</div>}
                    
                        <label htmlFor="password">Contraseña</label>
                        <Field 
                            type="password" 
                            name="password"
                            id="password"
                            
                        />
                          {touched.password && errors.password && <div className={styles["msg-error"]}>{errors.password}</div>}

                        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                        <Field 
                            type="password" 
                            name="confirmPassword" 
                            id="confirmPassword"
                            
                        />
                        {touched.confirmPassword && errors.confirmPassword && <div className={styles["msg-error"]}>{errors.confirmPassword}</div>}
                            
                        <button type="submit">Registrar</button>
                        {formularioEnviado && <p className={styles["exito"]}>Formulario Enviado</p>}
                    </Form>
                )}
                
            </Formik>
           
        </div>
    )

};

export default FormRegister;

// import React, { useState, useEffect } from "react";
// import styles from './FormRegister.module.scss';

// const FormRegister = ({ users, setUsers }) => {
//     const [userInfo, setUserInfo] = useState({
//         userName: '',
//         password: '',
//         confirmPassword: '',
//         picProfile: '',
//         descriptionProfile: '',
//     });
//     const [userInfoError, setUserInfoError] = useState({
//         userName: '',
//         password: '',
//         confirmPassword: '',
//         picProfile: '',
//         descriptionProfile: '',
//     });
    
//     const [errorForm, setErrorForm] = useState('');

//     const handleOnchange = (e) => {
//         const { target } = e;
//         const { name, value } = target;
//         setUserInfo({
//             ...userInfo,
//             [name]: value,
//         })
//     };

//     const validations = {
//         userName: userInfo.userName.length > 10,
//         password: userInfo.password !== userInfo.confirmPassword,
//         confirmPassword: userInfo.confirmPassword !== userInfo.password,
//         descriptionProfile: userInfo.descriptionProfile.length < 3 || userInfo.descriptionProfile.length > 100
//     }

//     const handleValidations = (e) => {
//         console.log("🚀 ~ file: FormRegister.js:52 ~ handleValidations ~ e:", e.target)

//         const { target } = e;
//         const { name, value } = target;
//         console.log("🚀 ~ file: FormRegister.js:42 ~ handleValidations ~ validations[name]:", validations[name])
//         if(validations[name]) {
            
//             setUserInfoError({
//                 ...userInfoError,
//                 [name]: `Hay un error en el campo ${name}`,
//             })
//         } else {
//             setUserInfoError({
//                 ...userInfoError,
//                 [name]: '',
//             })
//         }

//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         const hasError = Object.values(userInfoError).filter(err => err !== '');
//         if (hasError.length > 0) {
//             setErrorForm('Revisa tu formulario');
//         } else {
//             setUsers([...users, userInfo]);
//             setErrorForm('');
//             setUserInfo({
//                 userName: '',
//                 password: '',
//                 confirmPassword: '',
//                 picProfile: '',
//                 descriptionProfile: '',
//             });
//             setUserInfoError({
//                 userName: '',
//                 password: '',
//                 confirmPassword: '',
//                 picProfile: '',
//                 descriptionProfile: '',
//             })
//         }

//     }

//     useEffect(() => {

//         console.log("🚀 ~ file: FormRegister.js:58 ~ FormRegister ~ userInfoError:", userInfoError)
//     }, [userInfoError])


//     return (
//         <div className={styles["form-container"]}>
//             <form onSubmit={onSubmit}>
//                 <label htmlFor="userName">Nombre de usuario</label>
//                 <input 
//                     type="text" 
//                     value={userInfo.userName} 
//                     name="userName" 
//                     onChange={handleOnchange} 
//                     onBlur={handleValidations} 
//                 />
//                 {userInfoError.userName !== '' && (
//                     <p className={styles[{styles["msg-error"]}]}>{userInfoError.userName}</p>
//                 )}
//                 <label htmlFor="picProfile">Foto de perfil</label>
//                 <input 
//                     type="text" 
//                     value={userInfo.picProfile} 
//                     name="picProfile" 
//                     onChange={handleOnchange} 
//                     onBlur={handleValidations}
//                 />
//                 {userInfoError.picProfile !== '' && (
//                     <p className={styles[{styles["msg-error"]}]}>{userInfoError.picProfile}</p>
//                 )}
//                 <label htmlFor="descriptionProfile">Cuéntanos quién eres?</label>
//                 <textarea 
//                     name="descriptionProfile" 
//                     value={userInfo.descriptionProfile} 
//                     onChange={handleOnchange} 
//                     id="" 
//                     cols="30" 
//                     rows="10"
//                     onBlur={handleValidations}
//                 ></textarea>
//                 {userInfoError.descriptionProfile !== '' && (
//                     <p className={styles[{styles["msg-error"]}]}>{userInfoError.descriptionProfile}</p>
//                 )}
//                 <label htmlFor="password">Contraseña</label>
//                 <input 
//                     type="password" 
//                     value={userInfo.password} 
//                     name="password" 
//                     onChange={handleOnchange} 
//                     onBlur={handleValidations}
//                 />
                    
//                 {userInfoError.password !== '' && (
//                     <p className={styles[{styles["msg-error"]}]}>{userInfoError.password}</p>
//                 )}
//                 <label htmlFor="confirmPassword">Confirmar contraseña</label>
//                 <input 
//                     type="password" 
//                     value={userInfo.confirmPassword} 
//                     name="confirmPassword" 
//                     onChange={handleOnchange} 
//                     onBlur={handleValidations}
//                 />
                    
//                 {userInfoError.confirmPassword !== '' && (
//                     <p className={styles[{styles["msg-error"]}]}>{userInfoError.confirmPassword}</p>
//                 )}
//                 <button type="submit">Registrar</button>
//             </form>
//         </div>
//     )

// };

// export default FormRegister;
