import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Header from './Header';
import Foot from './Footer';
// import FormLogin from './FormLogin';
// import Mugs from './MugCards';
import Prod from './ProductCards';
// import Embroidery from './Embroidery';
// import Hats from './HatsCards';
// import Bags from './BagCards';
// import Shirts from './ShirtCards';
// import Invitation from './InvitationCards';
// import Brochure from './BrochureCards';
// import Gift_Boxes from './Gift_BoxesCards';
import Product from './ProductPage'
import Cart from './Cart';
import NotFound from './NotFound';
// import CategoryCard from './CategoryCards';
const Router = () =>(
    <div>
    <Header/>
    <BrowserRouter>
        <Switch>
            {/* if route is / takes us to store picker*/}
            {/* <Route exact path='/' component={StorePicker}/> */}
            <Route exact path='/' component={App}/>
            {/* route will take store picker etry and route to page */}
            {/* <Route exact path='/store/:storeId' component={App}/> */}
            <Route exact path='/mugs' component={Prod}/>
            <Route exact path='/hats' component={Prod}/>
            <Route exact path='/bags' component={Prod}/>
            <Route exact path='/shirts' component={Prod}/>
            <Route exact path='/embroidery' component={Prod}/>
            <Route exact path='/invitation' component={Prod}/>
            <Route exact path='/brochure' component={Prod}/>
            <Route exact path='/gift_boxes' component={Prod}/>
            <Route exact path='/product/:id' component={Product}/>
            <Route exact path='/cart' component={Cart}/>
            {/* if route is  */}
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
    <Foot/>
    </div>
)

export default Router;