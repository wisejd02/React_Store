import React, { Component } from 'react';
import {Col, Row, Input, Button, Icon} from 'react-materialize';
import ProductCard from './ProductCard';
import '../App.css';

class ProductPage extends Component {
    render() {
        return (
        <div className="App main">
            <Row>
                <Col>
                    <ProductCard/>
                </Col>
                 <Col>   
                    <Row className="leftMv50">
                        <Input type='select' label='Materialize Select' defaultValue='2'>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </Input>
                    </Row> 
                    <Col className=" leftMv25 valign-wrapper ">
                        <a className="btn-floating btn-large waves-effect waves-light red prefix"><i className="material-icons">add</i></a>
                    </Col>
                {/* <Col className=" qty"> */}
                    <Input s={4} label="Qty" validate defaultValue={1} />
                    
                    {/* </Col> */}
                    <Col className=" valign-wrapper " >
                        <a className="btn-floating btn-large waves-effect waves-light red "><i className="material-icons">remove</i></a>
                    </Col>
                    <Row>
                        <Button className="red prodEle" waves='light'>Add to<Icon right>shopping_cart</Icon></Button>
                    </Row>
                </Col>      
            </Row> 
        </div>
        );
    }
}

export default ProductPage;   