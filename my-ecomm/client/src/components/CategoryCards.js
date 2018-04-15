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
            <div className="App main ">
            
            <Row >
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={'product1'} header={<CardTitle image={require("../images/category/mug.png")}></CardTitle>} actions={[<Link  key={'link1'} to='/mugs'>Cups, Mugs</Link>]}>
                        {/* <p>Cups, Mugs</p> */}
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product2"} header={<CardTitle image={require("../images/category/hat.png")}></CardTitle>} actions={[<Link key={'link2'} to='/hats'>Custom Hats</Link>]}>
                        {/* <p>Custom Hats</p> */}
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product3"} header={<CardTitle image={require("../images/category/bag.png")}></CardTitle>} actions={[<Link key={'link3'} to='/bags'>Bags, Aprons</Link>]}>
                        {/* <p>Bags, Aprons...</p> */}
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product4"} header={<CardTitle image={require("../images/category/t-shirt.png")}></CardTitle>} actions={[<Link key={'link4'} to='/shirts'>Custom Shirts</Link>]}>
                        {/* <p>Custom Shirts</p> */}
                    </Card>
                </Col>
                
            </Row> 
            <Row >
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={'product5'} header={<CardTitle image={require("../images/category/embroidery.png")}></CardTitle>} actions={[<Link  key={'link5'} to='/embroidery'>Monogram, Embroidery</Link>]}>
                        {/* <p>Embroidery/Monogram</p> */}
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product6"} header={<CardTitle image={require("../images/category/invitation.png")}></CardTitle>} actions={[<Link key={'link6'} to='/invitation'>Invitations, Cards</Link>]}>
                        {/* <p>Invitations and Cards</p> */}
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product7"} header={<CardTitle image={require("../images/category/brochure.png")}></CardTitle>} actions={[<Link key={'link7'} to='/brochure'>Labels, Brochure</Link>]}>
                        {/* <p>Label, Brochure, Flyers</p> */}
                    </Card>
                </Col>
                <Col m={3} s={3}>
                    <Card horizontal="true" onClick={this.handleClick} key={"product8"} header={<CardTitle image={require("../images/category/gift_boxes.png")}></CardTitle>} actions={[<Link key={'link8'} to='/gift_boxes'>Gift Boxes</Link>]}>
                        {/* <p>Gift Boxes</p> */}
                    </Card>
                </Col>
                
            </Row> 
        </div>
        );
    }
}

export default CategoryCard;           