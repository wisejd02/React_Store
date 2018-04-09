import React, { Component } from 'react';
import {Carousel} from 'react-materialize';
import '../App.css';

class ImgCaro extends Component {
    render() {
        return (
            <Carousel options={{ fullWidth: false }} images={[
                require('../images/mug.png'),
                require('../images/hat.png'),
                require('../images/bag.png'),
                require('../images/embroidery.png')    
            ]} />
        );
    }
}

export default ImgCaro;