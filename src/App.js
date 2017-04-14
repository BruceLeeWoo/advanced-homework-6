import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Carousel from './components/Carousel';
import CategoryMenu from './components/CategoryMenu';
import Products from './components/Products';
import Shop from './components/Shop';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';

function App (props) {
    return (
        <BrowserRouter>
            <div className="App">
            <NavBar />
            <div className="container">
                <div className="row">
                    <Switch>
                      <Route exact path="/" render={(p)=>{
                        return (<Shop  
                        {...props}
                        {...p}
                        category={props.state.currentCategory} 
                        products={props.state.products} 
                        />)
                      }} />
                      <Route exact path="/shop/:category" render={(p)=>{
                        return (<Shop  
                        {...props}
                        {...p}
                        category={props.state.currentCategory} 
                        products={props.state.products} 
                        />)
                      }} />
                      <Route exact path="/about" render={(p)=>{
                        return (<About />)
                      }} />
                      <Route exact path="/contact" render={(p)=>{
                        return (<Contact />)
                      }} />
                      <Route exact path="/product/:id" render={(p)=>{
                        return (<Product {...p} products={props.state.products} />)
                      }} />
                     
                    </ Switch>
                </div>
            </div>
            <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
