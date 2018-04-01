
import React, { Component } from 'react';
import {Row, Input, Icon} from 'react-materialize';
import '../App.css';

class Login extends Component {
    render() {
        return (
            <Row>
                <Input s={6} label="First Name"></Input>
                <Input s={6} label="Last Name" />
                <Input type="password" label="password" s={12} />
                <Input type="email" label="Email" s={12} />
            </Row>
        );
    }
}

export default Login;