import React, { Component } from 'react';
import {Icon} from 'react-materialize';
import '../App.css';

class Cart extends Component {
    constructor (props){
        super(props)

        this.handleClick= this.handleClick.bind(this)

    }
     //bind function to class/parent
     handleClick(e) {
        e.preventDefault();
        console.log(e.target);
        console.log(e);
        //this.props.offline()    
        console.log('The link was clicked.');
        var p=e.parentNode.parentNode;
         p.parentNode.removeChild(p);
        
    }
    render() {
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
                        <tr>
                            <td><img src={require("../images/mugs/custom tall mug.jpeg")} alt="Tall Mug" border="3" height="50" width="50"></img></td>
                            <td>Tall Mug</td>
                            <td>1</td>
                            <td>$10.00</td>
                            <td onClick={this.handleClick}><Icon>delete_forever</Icon></td>
                        </tr>
                        <tr>
                            <td><img alt="reg mug wit logo" src={require("../images/mugs/custom logo msg mug.jpeg" )}border="3" height="50" width="50"/></td>
                            <td>Regular Mug</td>
                            <td>1</td>
                            <td>$8.00</td>
                            <td onClick={this.handleClick}><Icon>delete_forever</Icon></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="3">Total :</th>
                            <td>$18.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

export default Cart;