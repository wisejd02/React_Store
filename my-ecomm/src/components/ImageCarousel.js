import React, { Component } from 'react';
import {Carousel} from 'react-materialize';
import '../App.css';



class ImgCaro extends Component {
    render() {
        return (
            <Carousel options={{ fullWidth: false, duration:400 }} images={[
                require('../images/carousel/mug.png'),
                require('../images/carousel/hat.png'),
                require('../images/carousel/bag.png'),
                require('../images/carousel/embroidery.png')    
            ]} />
        );
    }
}

export default ImgCaro;