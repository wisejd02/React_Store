import React, { Component } from 'react';
import {Col, Row, Input, Button, Icon} from 'react-materialize';
import ProductCard from './ItemCard';
import API from "../utils/API";
import '../App.css';

class ProductPage extends Component {
    state = {
        count: 1,
        cart: []
      };
    
      handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
      }
    
      handleDecrement = () => {
          if(this.state.count>0){
            this.setState({ count: this.state.count - 1 });
          }
        
      }
      handleAddToCart =()=> {
        if(this.state.count>0){
            var currentLocation = window.location;
            var itemId = currentLocation.pathname.split("/");
            console.log(itemId[2]);
            this.getSelectedItem(itemId[2]);
            
            
        }
      };

      getSelectedItem = (id) => {
        API.getSelectedItem(id)
            .then(res =>
                //console.log(res.data)
                // this.setState({
                //   item: res.data
                // })
                this.state.cart.push(res.data)
            ).catch(err => console.log(err));
            //this.state.cart.noItems.(this.state.count);
            console.log(this.state);
    };

    render() {
        return (
        <div className="App main">
            <Row>
                <Col>
                    <ProductCard/>
                </Col>
                 <Col>   
                    <Row className="leftMv50">
                        <Input type='select' label='Select Option' defaultValue='1'>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </Input>
                    </Row> 
                    <Col className=" leftMv25 valign-wrapper ">
                        <a className="btn-floating btn-large waves-effect waves-light red prefix" onClick={this.handleIncrement}><i className="material-icons">add</i></a>
                    </Col>
                {/* <Col className=" qty"> */}
                    <Input s={4} label="Qty" validate defaultValue={1} value={this.state.count}/>
                    
                    {/* </Col> */}
                    <Col className=" valign-wrapper " >
                        <a className="btn-floating btn-large waves-effect waves-light red "><i className="material-icons" onClick={this.handleDecrement}>remove</i></a>
                    </Col>
                    <Row>
                        <Button className="red prodEle" waves='light' onClick={this.handleAddToCart} >Add to<Icon right>shopping_cart</Icon></Button>
                    </Row>
                </Col>      
            </Row> 
        </div>
        );
    }
}

export default ProductPage;   