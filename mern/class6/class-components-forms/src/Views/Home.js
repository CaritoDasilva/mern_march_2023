import React, { useState } from "react";
import Form from "../Components/Form";
import ProfileView from "../Components/ProfileView";
import styles from './Home.module.scss';

const Home = () => {
    // const [userName, setUsername] = useState('Carolina');
    // const [email, setEmail] = useState('caro@gmail');
    // const [address, setAddress] = useState('');
    const [userInfo, setUserInfo] = useState({
        userName: 'Carolina',
        email: 'car@gmail.com',
        address: ''
    });

    const handleChange = (event) => {
        const { target } = event;
        console.log("🚀 ~ file: Home.js:16 ~ Home ~ handlChange ~ value:", target)
        setUserInfo({
            ...userInfo,
            [target.name]: target.value,
        })
        
    }

    return(
        <div className={styles["home-container"]}>
            <Form 
                userName={userInfo.userName} 
                email={userInfo.email} 
                address={userInfo.address}
                handleChange={handleChange}
            />
            <ProfileView 
                userName={userInfo.userName} 
                email={userInfo.email} 
                address={userInfo.address} 
            />
        </div>
    )
}

export default Home;
