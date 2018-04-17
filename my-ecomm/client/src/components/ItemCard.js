import React, { Component } from 'react';
import {MediaBox, Row} from 'react-materialize';
import API from "../utils/API";
import '../App.css';

class ProductCard extends Component {
    state = {
        item: []
      };
    // constructor (props){
    //     super(props)

    //     this.handleClick= this.handleClick.bind(this)

    // }
    componentDidMount() {
        var currentLocation = window.location;
        var itemId = currentLocation.pathname.split("/");
         console.log(itemId[2]);
        this.getSelectedItem(itemId[2]);
    }

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
        return (
            <Row>
                {this.state.item.map(product => (
                    <MediaBox key={product.id} src={product.Image} caption={product.ProductDescr} width="350"/>
                ))}
            </Row> 
        );
    }
}

export default ProductCard;           