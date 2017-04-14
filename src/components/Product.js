import React, { Component } from 'react';

function Product(props){
  var id = props.match.params.id;
  var product = props.products.find((p)=>p.id == id);
  if(!product)
    return null;
  var {name, description}  = product;
     return (    
     <div>
        {name}
        {description}
    </div>
    )
}
export default Product;