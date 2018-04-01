import React, { Component } from 'react';
import {MediaBox, Row} from 'react-materialize';
import '../App.css';

class ProductCard extends Component {
    render() {
        return (
            <Row>
                <MediaBox src="https://lorempixel.com/350/350/nature/1" caption="A demo media box1" width="350"/>
            </Row> 
        );
    }
}

export default ProductCard;           