import React, { Component } from 'react';
import {Card, CardTitle, Col, Row} from 'react-materialize';
import '../App.css';
import {Link} from 'react-router-dom'

class BagCard extends Component {
    constructor (props){
        super(props)

        this.handleClick= this.handleClick.bind(this)

    }

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
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={'product1'} header={<CardTitle image={require("../images/bags/Tote Bag light.png")}></CardTitle>} actions={[<Link  key={'link1'} to='/personalized'>This is a link</Link>]}>
                        <p>Personalized</p>
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product2"} header={<CardTitle image={require("../images/bags/Tote Bag Color Straps.png")}></CardTitle>} actions={[<Link key={'link2'} to='/hats'>This is a link</Link>]}>
                        <p>Custom Hats</p>
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product3"} header={<CardTitle image={require("../images/bags/Dark Apron.jpg")}></CardTitle>} actions={[<Link key={'link3'} to='/bags'>This is a link</Link>]}>
                        <p>Custom Bags, Aprons...</p>
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product4"} header={<CardTitle image={require("../images/bags/light apron.png")}></CardTitle>} actions={[<Link key={'link4'} to='/shirts'>This is a link</Link>]}>
                        <p>Custom Shirts</p>
                    </Card>
                </Col>
                
            </Row> 
        </div>
        );
    }
}

export default BagCard;           