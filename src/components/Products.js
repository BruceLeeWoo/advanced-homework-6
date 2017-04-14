import React, { Component } from 'react';
import ProductDetail from './ProductDetail';

function Products(props){
  var category = props.match.params.category;
  var products = props.products.filter(function(prod){
    return prod.category === category;
  })
  .map(function(prod){
    return <ProductDetail product={prod} />;
  });
  return (    
    <div>
      {products}
    </div>
    )
}
export default Products;