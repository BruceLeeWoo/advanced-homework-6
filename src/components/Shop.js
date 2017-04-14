import React, { Component } from 'react';
import Carousel from './Carousel';
import CategoryMenu from './CategoryMenu';
import Products from './Products';

function Shop(props){
     return (    
     <div>
        <CategoryMenu {...props}/>
        <div className="col-md-9">
            <Carousel />
            <div className="row">
              <Products 
              {...props}
              category={props.category} 
              products={props.products} />
            </div>
        </div>
    </div>
    )
}
export default Shop;