import styles from "./FormRegister.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, {useState} from "react";

const FormRegister = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <div className={styles["form-container"]}>
      <Formik
        initialValues={{
          nombre: "",
          picProfile: "",
          description: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(valores) => {
          let errores = {};

          //Validacion nombre
          if (!valores.nombre) {
            errores.nombre = console.log("porfavor ingresa un nombre");
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre no cumple las validaciones";
          }

          //Validacion correo
          if(!valores.correo){
            errores.correo ="Por favor ingresa un correo electronico"
          }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
            errores.correo = "El correo solo puede contener letras, numeros, puntos y guion bajo"
          }
          //Validacion contraseña
        //   if(valores.password){
        //     errores.correo = "Por favor ingresa una contraseña"
        //   }else if (valores.password && valores.confirmPassword.test(valores.password)) {
        //     errores.password="La contraseña es invalida"
        //   }
          return errores;
        }}
        onSubmit={({resetForm}) => {
            resetForm();
            console.log("formulario enviado");
            cambiarFormularioEnviado(true);
            setTimeout(()=>cambiarFormularioEnviado(false),5000);
        }}
      >
        {({ errors, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre de usuario</label>
            <Field  
              type="text"
              name="nombre"
            />
            <ErrorMessage name="nombre" component={()=>(
                <div className={styles["msg-error"]}>{errors.nombre}</div>

            )}/>
            <label htmlFor="picProfile">Correo electronico</label>    
            <Field
              type="correo"
              name="correo"
            />
            <ErrorMessage name="correo" component={()=>(
                <div className={styles["msg-error"]}>{errors.correo}</div>
            )} />
            <label htmlFor="nombre">Cuéntanos quién eres</label>
            <Field className={styles["description"]}
              type="textarea"
              name="descriptionProfile"
              cols="30"
              rows="20"
            />
            <ErrorMessage name="text" component={()=> (
                <div className={styles["msg-error"]}>
                {errors.descriptionProfile}
              </div>
            )}/>
            <label htmlFor="password"> Contraseña</label>
            <Field
              type="password"
              name="password"
              cols="20"
              rows="20"
            />
            <ErrorMessage name="password" component={()=>(
                <div className={styles["msg-error"]}>{errors.password}</div>

            )} />

            <label htmlFor="password"> Confirmar contraseña</label>
            <Field
              type="password"
              name="confirmPassword"
            />
            <ErrorMessage name="confirmPasword" component={()=>(
                <div className={styles["msg-error"]}>
                {errors.confirmPassword}
              </div>
            )} />
            <button type="submit">Registrar</button>
            {formularioEnviado && <p className={styles["msg-success"]}>¡Formulario enviado con exito!</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormRegister;