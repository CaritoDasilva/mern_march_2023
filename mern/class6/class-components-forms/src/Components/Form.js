import React from "react";
import styles from './Form.module.scss';

const Form = (props) => {
    const { userName, email, address, handleChange, } = props;
    return (
        <div className={styles["form-container"]}>
            <h1>Registro</h1>
            <form action="">
                <label htmlFor="userName">Usuario</label>
                <input type="text" placeholder="Ej. Carolina Da Silva..." name="userName" value={userName} onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Ej. caro@gmail.com..." name="email" value={email} onChange={handleChange} />
                <label htmlFor="address">Dirección</label>
                <textarea id="" cols="30" rows="10" name="address" value={address} onChange={handleChange} placeholder="Calle 1, comuna Mariquina, región de Los Ríos"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}


export default Form;
