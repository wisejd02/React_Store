import React, { Component } from 'react';
import {Card, CardTitle, Col, Row} from 'react-materialize';
import '../App.css';
import {Link} from 'react-router-dom'

class CategoryCard extends Component {
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
                    <Card horizontal="true" onClick={this.handleClick} key={'product1'} header={<CardTitle image={require("../images/mug.png")}></CardTitle>} actions={[<Link  key={'link1'} to='/category'>This is a link</Link>]}>
                        <p>I am a very simple card. I am good at containing small bits of information</p>
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product2"} header={<CardTitle image={require("../images/hat.png")}></CardTitle>} actions={[<Link key={'link2'} to='/category'>This is a link</Link>]}>
                        <p>I am a very simple card. I am good at containing small bits of information</p>
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product3"} header={<CardTitle image={require("../images/bag.png")}></CardTitle>} actions={[<Link key={'link3'} to='/category'>This is a link</Link>]}>
                        <p>I am a very simple card. I am good at containing small bits of information</p>
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product4"} header={<CardTitle image={require("../images/embroidery.png")}></CardTitle>} actions={[<Link key={'link4'} to='/category'>This is a link</Link>]}>
                        <p>I am a very simple card. I am good at containing small bits of information</p>
                    </Card>
                </Col>
                
            </Row> 
        </div>
        );
    }
}

export default CategoryCard;           