import React from 'react'
import styles from './MyForm.module.css';

//const ProfileView = ( {user} ) => {//
 //const { username, email, password, password2 } = user;//

const ProfileView = (props) => {
 
  const { user, email, direccion } = props;
  //const { username, email, password, password2 } = props.user;//
  
  return (
    <div className={styles.listado}>
       <p>Nombre:&nbsp;{user}</p>
       <p>Email:&nbsp;{email}</p>
       <p>Direccion:&nbsp;{direccion}</p>
    </div>
  )
}

export default ProfileView;