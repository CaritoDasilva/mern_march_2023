import React, { useState } from 'react';
import ProfileView from './ProfileView';
import styles from './MyForm.module.css';



const UserForm = (props) => {
    const [user, setUser] = useState(
        {
            username: '',
            email: '',
            direccion: ''
        }
    );
    
    // Declaracion de variables y constantes

    let valUser = React.useRef(false);
    let valEmail = React.useRef(false);
    let valDireccion = React.useRef(false);
    let mensajeAviso = React.useRef("");
    const inputUsername = document.getElementById('username');
    const inputEmail = document.getElementById('email');
    const inputDireccion = document.getElementById('direccion');

    // Guarda los datos en user a medida que se va produciendo el evento onchange
    const saveData = (entrada) => {
        const { target } = entrada;
        setUser({ ...user, [target.name]: target.value });
    }
    
    // Simula que envia los datos ya validados

    const createUser = (e) => {
        e.preventDefault();
        const etiquetaMostrar = document.getElementById('etiquetaMensaje');
        if (valUser.current === true && valEmail.current === true && valDireccion.current === true){
                valUser.current = false              //reinicia las variables
                valEmail.current = false             
                valDireccion.current = false         //reinicia los campos input
                inputUsername.value = "";
                inputEmail.value = "";
                inputDireccion.value = "";
                alert("Formulario enviado correctamente");
                inputUsername.focus();
                setUser("");
                
        }else{
                etiquetaMostrar.innerText = "Favor llenar todos y correctamente los campos del Formulario";
        }
    };


     // Valida campo usuario
    const validaUsername = (e) =>{
        
        if(e.target.value.length >= 2 && (!e.target.value.includes(" "))){
            valUser.current = true              
            mensajeAviso.current = "";
        }else{
            valUser.current = false
            mensajeAviso.current = "Nombre de usuario, no puede estar en blanco, contener espacios y debe ser al menos de dos caracteres";
        }      
        
        
        return mensajeAviso.current;      
    }

    // Valida campo email
    const validaEmail = (e) =>{
        
        if(e.target.value.includes(".com") && e.target.value.includes("@") && (!e.target.value.includes(" "))){
            valEmail.current = true
            mensajeAviso.current = "";
        }else{
            valEmail.current = false
            mensajeAviso.current = "Email, no puede estar en blanco y debe incluir la @ y el dominio .com";
        }
               
        return mensajeAviso.current;
    }

     // Valida campo direccion
    const validaDireccion= (e) =>{
        
        if(e.target.value.length > 0 && e.target.value.length <= 100){
            valDireccion.current = true
            mensajeAviso.current = "";
        }else{
            valDireccion.current = false
            mensajeAviso.current = "Direccion, no puede estar en blanco y exceder mas de cien caracteres";
        }
      
        return mensajeAviso.current;
    }
    
    // Antes de validar recibe cual es el campo a validar para llamar a funcion validar de cada uno
    // Retorna mensaje a mostrar sobre cada input

    const validar = (e) => {        
        
        const etiquetaMostrar = document.getElementById('etiquetaMensaje');
        
        let mensajeRecibido = "";
        if (e.target.name === "username"){
            mensajeRecibido = validaUsername(e);            
        }else if(e.target.name === "email"){
            mensajeRecibido = validaEmail(e);              
        }else{
            mensajeRecibido = validaDireccion(e);
        }      
        
        etiquetaMostrar.innerText = mensajeRecibido;
    };

    return (
        <div className={styles.main}>
            <form onSubmit={createUser} className={styles.form}>
                <h3>Bienvenido, formulario de registro</h3>
                <div className={styles.inputs}>
                    <label>Username: </label>
                    <input id = "username" name="username" type="text" placeholder = "usuario sin espacios y dos caracteres o más (obligatorio)" onChange={(e) => saveData(e)} onBlur={(e) => validar(e)}/>
                </div>
                <div className={styles.inputs}>
                    <label>Email Address: </label>
                    <input id = "email" name="email" type="email" placeholder = "email sin espacios, usar @ y .com (obligatorio)" onChange={(e) => saveData(e)} onBlur={(e) => validar(e)} />
                </div>
                <div className={styles.inputs}>
                    <label>Direccion: </label>
                    <input id = "direccion" name="direccion" type="text" placeholder = "direccion no puede superar de 100 caracteres (obligatorio)" onChange={(e) => saveData(e)} onBlur={(e) => validar(e)} />
                </div>
                <ProfileView user={user.username} email={user.email} direccion={user.direccion} />
                <div>
                <input type="submit" className={styles.boton} value="Enviar" />
                </div>
                <div>
                <label id="etiquetaMensaje" className={styles.etiquetaMensaje}></label>
                </div>
            </form>              
        </div>
        
    );
};

export default UserForm;

/*<ProfileView user={user}*/