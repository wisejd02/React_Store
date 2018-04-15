import React, { Component } from 'react';
//import FormLogin from './FormLogin';
import Carousel from './ImageCarousel';
// import Cart from './Cart';
import CategoryCards from './CategoryCards';
// import ProductPage from './ProductPage';
import '../App.css';

class Main extends Component {

    render() {
        return (
            <div className="">
                <main>
                    {/* <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p> */}
                    <Carousel/>
                    {/* <ProductPage/> */}
                    {/* <FormLogin/> */}
                    <CategoryCards/>
                    {/* <Cart/> */}
                </main> 
            </div>
        );
    }
}

export default Main;