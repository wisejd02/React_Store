import React, { Component } from 'react';
import {Icon, NavItem, Navbar} from 'react-materialize';
import logo from '../logo.svg';
import '../App.css';
class Header extends Component {
    render() {
        return (
            <div className="">
            <header>
                <Navbar className="fancy-font" brand='JMGadDesign' right>
                    <img src={logo} className="App-logo" alt="logo" />
                    <NavItem href='/cart'><Icon>shopping_cart</Icon></NavItem>
                    <NavItem href='/'><Icon>home</Icon></NavItem>
                    {/* <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem> */}
                </Navbar>
            </header>
            </div>
        );
    }
}

export default Header;