import React, { Component } from 'react';
import FormLogin from './FormLogin';
import Carousel from './ImageCarousel';
import Cart from './Cart';
import ProductCard from './ProductCard';
import '../App.css';

class Main extends Component {
    render() {
        return (
            <div className="App main">
                <main>
                    {/* <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p> */}
                    <Carousel/>
                    <FormLogin/>
                    <ProductCard/>
                    <Cart/>
                </main> 
            </div>
        );
    }
}

export default Main;