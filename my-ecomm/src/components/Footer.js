import React, { Component } from 'react';
import {Footer} from 'react-materialize';

import '../App.css';
class Foot extends Component {
    render() {
        return (
            <div className="App">
                <Footer copyrights="&copy 2018 Copyright Text"
                    // moreLinks={
                    //     <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    // }
                    // links={
                    //     <ul>
                    //         <li><a href="#!"><img className="ico-sm" alt="facebook" src={require("../images/icons/facebook.png")}/></a></li>
                    //         <li><a href="#!"><img className="ico-sm" alt="facebook" src={require("../images/icons/pinterest.png")}/></a></li>
                    //         <li><a href="#!"><img className="ico-sm" alt="facebook" src={require("../images/icons/snapchat.png")}/></a></li>
                    //         <li><a href="#!"><img className="ico-sm" alt="facebook" src={require("../images/icons/facebook.png")}/></a></li>
                    //     </ul>
                    // }
                    // className='example'
                    
                >
                {/* <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
                <div className="cntrFoot">
                            <a href="#!"><img className="ico-sm" alt="facebook" src={require("../images/icons/facebook.png")}/></a>
                            <a href="#!"><img className="ico-sm" alt="facebook" src={require("../images/icons/pinterest.png")}/></a>
                            <a href="#!"><img className="ico-sm" alt="facebook" src={require("../images/icons/snapchat.png")}/></a>
                            <a href="#!"><img className="ico-sm" alt="facebook" src={require("../images/icons/facebook.png")}/></a>
                </div>
            </Footer>
            </div>
        );
    }
}

export default Foot;