import React, { Component } from 'react';
import {Card, CardTitle, Col, Row} from 'react-materialize';
import '../App.css';

class ProductCard extends Component {
    render() {
        return (
            <Row>
           <Col m={3} s={3}>
           <Card horizontal header={<CardTitle image="https://lorempixel.com/800/400/food/1"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
               <p>I am a very simple card. I am good at containing small bits of information</p>
             </Card>
         </Col>
         <Col m={3} s={3}>
         <Card horizontal header={<CardTitle image="https://lorempixel.com/800/400/food/2"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
             <p>I am a very simple card. I am good at containing small bits of information</p>
           </Card>
       </Col>
       <Col m={3} s={3}>
           <Card horizontal header={<CardTitle image="https://lorempixel.com/800/400/food/3"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
               <p>I am a very simple card. I am good at containing small bits of information</p>
             </Card>
         </Col>
         <Col m={3} s={3}>
           <Card horizontal header={<CardTitle image="https://lorempixel.com/800/400/food/4"></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
               <p>I am a very simple card. I am good at containing small bits of information</p>
             </Card>
         </Col>
       </Row> 
        );
    }
}

export default ProductCard;           