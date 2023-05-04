import React, { Component } from 'react';
import Button from '../Components/Button';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Acá viene un botón</h1>
                <Button text={"Click me"}/>
            </div>
        )
    }
}
    
export default Home;
