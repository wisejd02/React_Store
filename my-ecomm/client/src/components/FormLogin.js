
import React, { Component } from 'react';
import {Row, Input} from 'react-materialize';
import '../App.css';

class Login extends Component {
    render() {
        return (
            <div className="App main">
            <Row>
                <Input s={6} label="First Name"></Input>
                <Input s={6} label="Last Name" />
                <Input type="password" label="password" s={12} />
                <Input type="email" label="Email" s={12} />
            </Row>
            </div>
        );
    }
}

export default Login;