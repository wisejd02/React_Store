import React, { Component } from 'react';
import {Col, Row, Input, Button, Icon} from 'react-materialize';
import ProductCard from './ItemCard';
import API from "../utils/API";
import '../App.css';

class ProductPage extends Component {
    constructor (props){
        super(props)
        this.state = {
            count: 0,
            item:0
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this)
    
    }
    componentDidMount() {
        var currentLocation = window.location;
        var itemId = currentLocation.pathname.split("/");
         console.log(itemId[2]);
        this.getSelectedItem(itemId[2]);
    }
    
      handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
      }
    
      handleDecrement = () => {
          if(this.state.count>0){
            this.setState({ count: this.state.count - 1 });
          }
        
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      

      handleAddToCart = (e)=> {
        e.preventDefault();
        if(this.state.count>0){
            var currentLocation = window.location;
            var itemId = currentLocation.pathname.split("/");
            this.getSelectedItem(itemId[2]);
            console.log(this.state.item[0].id)
            localStorage.setItem(this.state.item[0].id, JSON.stringify(this.state));  
            window.Materialize.toast('Item added to cart!', 4000)
        }
      };

      getSelectedItem = (id) => {
        API.getSelectedItem(id)
            .then(res =>
                //console.log(res.data)
                this.setState({
                  item: res.data
                })
            ).catch(err => console.log(err));         
    };

   

    render() {
        const numItm = this.state.count;
        return (
        <div className="App main">
            <Row>
                <Col>
                    <ProductCard/>
                </Col>
                
                    <Col>  
                    <form>
                     
                        <Row className="leftMv50">
                            <Input className="leftMv50" type='select' label='Select Option' defaultValue='1'>
                                <option value='1'>Option 1</option>
                                <option value='2'>Option 2</option>
                                <option value='3'>Option 3</option>
                            </Input>
                        </Row>
                        <Col className=" leftMv25 valign-wrapper ">
                            <a className="btn-floating btn-large waves-effect waves-light red prefix" onClick={this.handleIncrement}><i className="material-icons">add</i></a>
                        </Col>
                    {/* <Col className=" qty"> */}
                        <Input s={4} type='text' label="Qty" validate value={numItm} onChange={this.handleChange}/>
                        
                        {/* </Col> */}
                        <Col className=" valign-wrapper " >
                            <a className="btn-floating btn-large waves-effect waves-light red "><i className="material-icons" onClick={this.handleDecrement}>remove</i></a>
                        </Col>
                        <Row>
                            <Button className="red prodEle" waves='light' onClick={this.handleAddToCart} >Add to<Icon right>shopping_cart</Icon></Button>
                        </Row>
                        </form>
                    </Col> 
                    
            </Row> 
        </div>
        );
    }
}

export default ProductPage;   