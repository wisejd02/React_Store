import React, { Component } from 'react';
import {Carousel} from 'react-materialize';
import '../App.css';

class ImgCaro extends Component {
    render() {
        return (
            <Carousel options={{ fullWidth: false }} images={[
                'https://lorempixel.com/800/400/food/1',
                'https://lorempixel.com/800/400/food/2',
                'https://lorempixel.com/800/400/food/3',
                'https://lorempixel.com/800/400/food/4',
                'https://lorempixel.com/800/400/food/5'
            ]} />
        );
    }
}

export default ImgCaro;