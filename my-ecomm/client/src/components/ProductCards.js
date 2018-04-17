import React, { Component } from 'react';
import {Card, CardTitle, Col, Row} from 'react-materialize';
import '../App.css';
import API from "../utils/API";
// import $ from 'jquery';
import {Link} from 'react-router-dom';

class PersonalizedCard extends Component {
    state = {
        products: []
      };
    constructor (props){
        super(props)

        this.handleClick= this.handleClick.bind(this)

    }

    componentDidMount() {
        // alert("did mount");
        var currentLocation = window.location;
        var product = currentLocation.pathname.split("/");
         console.log(product);
        this.getSelectedProduct(product[1]);
    }

    getSelectedProduct = (category) => {
        API.getSelectedProduct(category)
            .then(res =>
                //console.log(res.data)
                this.setState({
                  products: res.data
                })
            ).catch(err => console.log(err));
    };
        

    //bind function to class/parent
    handleClick(e) {
        e.preventDefault();
        console.log(e.target)
        //this.props.offline()    
        console.log('The link was clicked.');
        
    }

    
    
    render() {
        return (
            <div className="App main leftMv50">
            
            <Row >
            {/* {this.state.products.length ? ( */}
                {/* <div> */}
                  {this.state.products.map(product => (
                    <Col m={3} s={3} key={product.id}>
                      <Card horizontal="true" 
                        key={product.id} 
                        header={
                            <CardTitle image={product.Image}></CardTitle>
                        } 
                        actions={   
                            [<Link id={product.id} key={product.id} to={'/product/'+product.id}>Purchase</Link>]
                            }>
                          <p></p>
                      </Card>
                    </Col>
                  ))}
                {/* </div> */}
              {/* ) : (
                <h2>No Products toDisplay</h2>
              )} */}
              </Row >
              {/* <Row >
              <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={'product1'} header={<CardTitle image={require("../images/mugs/custom logo msg mug.jpeg")}></CardTitle>} actions={[<Link  key={'link1'} to='/product'>Purchase</Link>]}>
                        <p></p>
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product2"} header={<CardTitle image={require("../images/mugs/custom tall mug.jpeg")}></CardTitle>} actions={[<Link key={'link2'} to='/product'>Purchase</Link>]}>
                        <p></p>
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product3"} header={<CardTitle image={require("../images/mugs/chalice glass.png")}></CardTitle>} actions={[<Link key={'link3'} to='/product'>Purchase</Link>]}>
                        <p></p>
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product4"} header={<CardTitle image={require("../images/mugs/glass tumbler.png")}></CardTitle>} actions={[<Link key={'link4'} to='/product'>Purchase</Link>]}>
                        <p></p>
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={'product5'} header={<CardTitle image={require("../images/mugs/personal pic mug.jpeg")}></CardTitle>} actions={[<Link  key={'link5'} to='/product/'>Purchase</Link>]}>
                        <p></p>
                    </Card>
                </Col>
            </Row>  */}
            <Row >
                
            
                
            </Row> 
        </div>
        );
    }
}

export default PersonalizedCard;           