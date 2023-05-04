import React from "react";


const ProfileView = props =>{

    const{userFirstName, userLastName, email, password, confirmpassword} = props;

    return( 
        <div className="profileViews">
            <h2>RESULTS</h2>
            <h3>First Name: {userFirstName}</h3>
            <h3>Last Name: {userLastName}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
            <h3>Confirm Password: {confirmpassword}</h3>
        </div>
        )


}



// class ProfileView extends Component{ //lo que ingrese el usuario en el formulario se verá en este componente
//     render(){
//         const{userFirstName, userLastName, email, password, confirmpassword} = this.props;

//         return( 
//             <div>
//                 <h3>{userFirstName}</h3>
//                 <h3>{userLastName}</h3>
//                 <h3>{email}</h3>
//                 <h3>{password}</h3>
//                 <h3>{confirmpassword}</h3>
//             </div>

//         )
//     }
// }


export default ProfileView;