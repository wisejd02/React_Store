import React, { Component } from 'react';
import {Footer} from 'react-materialize';

import '../App.css';
class Foot extends Component {
    render() {
        return (
            <div className="App">
                <Footer copyrights="2018 Copyright Text">
                
                <div className="cntrFoot">
                    <a href="https://www.facebook.com/"><img className="ico-sm" alt="facebook" src={require("../images/icons/facebook.png")}/></a>
                    <a href="https://www.pinterest.com/"><img className="ico-sm" alt="pinterest" src={require("../images/icons/pinterest.png")}/></a>
                    <a href="https://www.snapchat.com/"><img className="ico-sm" alt="snpchat" src={require("../images/icons/snapchat.png")}/></a>
                    <a href="https://twitter.com/"><img className="ico-sm" alt="twitter" src={require("../images/icons/twitter.png")}/></a>
                </div>
            </Footer>
            </div>
        );
    }
}

export default Foot;