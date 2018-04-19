import React, { Component } from 'react';
import {Icon} from 'react-materialize';
import $ from 'jquery';
import '../App.css';

class Cart extends Component {
    state = {
        items:[]
    }
    constructor (props){
        super(props)
        this.handleClick= this.handleClick.bind(this)

    }
    
     //bind function to class/parent
     handleClick(e) {
        e.preventDefault();
        console.log(e.target);
        console.log(e);
        console.log( $(e.target).closest('td').attr('id') );
        //this.props.offline() 
        var key = $(e.target).closest('td').attr('id');
        localStorage.removeItem(key);   
        console.log('The link was clicked.');
        this.forceUpdate()
        // var p=e.parentNode.parentNode;
        //  p.parentNode.removeChild(p);
        
    }
    componentDidMount() {
    //    const cart = this.allStorage();
    //     console.log(cart);
    //     this.setState({
    //         items:cart
    //     })
    //     console.log(this.state)
    //     console.log(this.state.items);
    }

    allStorage = () => {

        var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

        while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
        }
        // this.setState({
        //     items:values
        // })
        console.log(values);
        return values;
    }

    totalPrice = (cart) =>{
        console.log('cart');
        var total = 0;
        if(cart){
            cart.map(item => (
                //console.log(JSON.parse(item).item[0].Price)
                total+=JSON.parse(item).item[0].Price
            ))
        }
        console.log(total);
        return total
    }

    render() {
        const cart = this.allStorage();
        const ttl = this.totalPrice(cart);
        console.log(cart)
        return (
            <div>
                <table className="striped responsive-table highlight">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Qty</th>
                            <th>Item Price</th> 
                            <th>Remove</th> 
                        </tr>
                    </thead>

                    <tbody>
                    {cart.map(item => (
                        
                        // console.log(JSON.parse(item).item[0].Price)
                        <tr key={JSON.parse(item).item[0].id} >
                            <td><img src={JSON.parse(item).item[0].Image} alt={JSON.parse(item).item[0].Product} border="3" height="50" width="50"></img></td>
                            <td>{JSON.parse(item).item[0].Product}</td>
                            <td>{JSON.parse(item).count}</td>
                            <td>{parseFloat(JSON.parse(item).item[0].Price)}</td>
                            <td onClick={this.handleClick} id={JSON.parse(item).item[0].id}><Icon>delete_forever</Icon></td>
                        </tr>
                        // <tr>
                        //     <td><img alt="reg mug wit logo" src={require("../images/mugs/custom logo msg mug.jpeg" )}border="3" height="50" width="50"/></td>
                        //     <td>Regular Mug</td>
                        //     <td>1</td>
                        //     <td>$8.00</td>
                        //     <td onClick={this.handleClick}><Icon>delete_forever</Icon></td>
                        // </tr>
                    ))}
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="3">Total :</th>
                            <td>{ttl}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default Cart;