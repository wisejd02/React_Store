import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App'
import Header from './Header'
import Foot from './Footer'
// import StorePicker from './StorePicker';
import NotFound from './NotFound';
import CategoryCard from './CategoryCards';
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
            <Route exact path='/category' component={CategoryCard}/>
            {/* if route is  */}
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
    <Foot/>
    </div>
)

export default Router;