import React, {useState} from "react";
import Form from "../Components/Form.js"
import ProfileView from "../Components/ProfileViews.js";


const Home = () =>{
    // const [userFirstName, setUsername] = useState("");
    // const [userLastName, setUserLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [userInfo, setUserInfo] = useState({
        userFirstName: "",
        userLastName: "",
        email: "",
        password:"",
        confirmpassword:"",
    });

    
    const handleChange = (event) =>{
        const{target} = event;
        setUserInfo({
        ...userInfo,
        [target.name]: target.value,
            })
    }
    
    
    return(
        <div>
            <Form 
                userFirstName={userInfo.userFirstName}
                userLastName={userInfo.userLastName}
                email={userInfo.email}
                password={userInfo.password}
                confirmpassword={userInfo.confirmpassword}
                handleChange={handleChange}
                />
    
                <ProfileView userFirstName={userInfo.userFirstName} userLastName={userInfo.userLastName} email={userInfo.email} password={userInfo.password}
                confirmpassword={userInfo.confirmpassword}  />
            </div>
        )


}


// class Home extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             userFirstName: "",
//             userLastName: "",
//             email: "",
//             password:"",
//             confirmpassword:"",
//         };
//         this.handleClick = this.handleChange.bind(this);
//     }

//     handleChange(event){
//         const{target} = event;
//         console.log= target.value;
//         this.setState({[target.name]: target.value})
//     }

//     render(){
//         const {userFirstName, userLastName, email, password, confirmpassword} = this.state
//         return(
//             <div>
//                 <Form 
//                 userFirstName={userFirstName}
//                 userLastName={userLastName}
//                 email={email}
//                 password={password}
//                 confirmpassword={confirmpassword}
//                 handleChange={ this.handleChange.bind(this)}
//                 />

//                 {/* {this.props.children} */}
//                 <ProfileView userFirstName={userFirstName} userLastName={userLastName} email={email} password={password}
//                 confirmpassword={confirmpassword}  />
//             </div>
//         )
//     }
// }

export default Home;