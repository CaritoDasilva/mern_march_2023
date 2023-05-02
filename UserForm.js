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

    const [send, setSend] = useState(
        {
            valUser: false,
            valEmail: false,
            valDireccion: false
        }
    );
    
    const [mensaje, SetMensaje] = useState();
    const [inputName, setInputName] = useState();
    const [inputEmail, setInputEmail] = useState();
    const [inputDireccion, setInputDireccion] = useState();   
    


    // expresiones para validar
    //eslint-disable-next-line
    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{2,40}$/, // Letras, numeros, guion y guion_bajo
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
        direccion: /^\w{1,100}/ // 1 a 100 caracteres.
    }

    // Guarda los datos en user a medida que se va produciendo el evento onchange
    const saveData = (entrada) => {
        const { target } = entrada;
        setUser({ ...user, [target.name]: target.value });
          
        switch (entrada.target.name) {
            case "username":
                  setInputName(entrada.target.value);  // tambien va actualizando los inputs
            break;
            case "email":
                  setInputEmail(entrada.target.value);  
            break;
            case "direccion":
                  setInputDireccion(entrada.target.value);  
            break;  
         }
    }
    
    // Simula que envia los datos ya validados cuando se presiona enviar

    const createUser = (e) => {
        e.preventDefault();
                if (send.valUser === true && send.valEmail === true && send.valDireccion === true){
                setSend({...send,valUser:false,valEmail:false,valDireccion:false});
                SetMensaje("Formulario enviado");                
                setTimeout(() => {
                    SetMensaje("");
                }, 3000);
                setUser("");
                setInputName("");
                setInputEmail("");
                setInputDireccion("");      
                  
        }else{
                SetMensaje("Favor de llenar todos los campos");
        }
    };

    // Funcion que valida cada campo cuando se produce evento onblur

    const validaCampo = (expresion, input, campo) =>{
        if(expresion.test(input.target.value)){
            setSend({ ...send, [campo]: true });  
            SetMensaje("ok");     
           
        }else{
            setSend({ ...send, [campo]: false });   
            SetMensaje("Favor de llenar correctamente");
           

        }
        
    }
    
    // Antes de validar recibe cual es el campo a validar para llamar a funcion validar campo
    
    const validar = (e) => {        
        
        if (e.target.name === "username"){
                validaCampo(expresiones.usuario,e,'valUser');                                      
        }else if(e.target.name === "email"){
                validaCampo(expresiones.correo,e,'valEmail');                           
        }else{
                validaCampo(expresiones.direccion,e,'valDireccion');                
        }      
        
    };

    return (
        <div className={styles.main}>
            <form id = "formulario" onSubmit={createUser} className={styles.form}>
                <h3>Bienvenido, formulario de registro</h3>
                <div className={styles.inputs}>
                    <label>Username: </label>
                    <input id = "username" name="username" type="text" onChange={(e) => saveData(e)} onBlur={(e) => validar(e)} value={inputName} />
                </div>
                <div className={styles.inputs}>
                    <label>Email Address: </label>
                    <input id = "email" name="email" type="email" onChange={(e) => saveData(e)} onBlur={(e) => validar(e)} value={inputEmail} />
                </div>
                <div className={styles.inputs}>
                    <label>Direccion: </label>
                    <input id = "direccion" name="direccion" type="text" onChange={(e) => saveData(e)} onBlur={(e) => validar(e)} value={inputDireccion} />
                </div>
                <ProfileView user={user.username} email={user.email} direccion={user.direccion} />
                <div>
                <input type="submit" className={styles.boton} value="Enviar" />
                </div>
                <div>
                <label id="etiquetaMensaje" className={styles.etiquetaMensaje}>
                    {
                       mensaje
                    }
                </label>
                </div>
            </form>              
        </div>        
    );
};

export default UserForm;

