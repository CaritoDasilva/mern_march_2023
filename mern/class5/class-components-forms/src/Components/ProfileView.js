import React, { Component } from "react";

class ProfileView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.userName
        };
    }

    render() {
        const { userName, email, address } = this.props;

        return (
            <div>
                <h1>{userName}</h1>
                <h3>{email}</h3>
                <h3>{address}</h3>
            </div>
        )
    }

}

export default ProfileView;
