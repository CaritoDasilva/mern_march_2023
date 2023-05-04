import React from "react";

const ProfileView = (props) => {
    console.log("🚀 ~ file: ProfileView.js:4 ~ ProfileView ~ props:", props)
    const { userName, email, address } = props;

    
    return (
        <div>
            <h1>{userName}</h1>
            <h3>{email}</h3>
            <h3>{address}</h3>
        </div>
    )
};

export default ProfileView;
