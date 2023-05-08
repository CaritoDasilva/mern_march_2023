import React, { Component } from "react";
import Form from "../Components/Form";
import ProfileView from "../Components/ProfileView";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            address: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { target } = event;
        console.log("🚀 ~ file: Home.js:16 ~ Home ~ handlChange ~ value:", target)
        this.setState({ [target.name]: target.value })
        // this.setState({ email: target.value })
    }

    render() {
        const { userName, email, address } = this.state;
        return(
            <div>
                <h1>Registro</h1>
                <Form 
                    userName={userName} 
                    email={email} 
                    address={address}
                    handleChange={this.handleChange.bind(this)}
                />
                <ProfileView userName={userName} email={email} address={address} />
            </div>
        )
    }

}

export default Home;
