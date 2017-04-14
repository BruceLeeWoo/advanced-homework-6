import React, { Component } from 'react';
import {Link} from 'react-router-dom';

function CategoryMenu(props){
  var categories = props.state.categories.map((cat)=>{
    return  <Link to={"/shop/" + cat} className="list-group-item">{cat}</Link>;
  });
  return (    
    <div className="col-md-3">
        <p className="lead">Shop Name</p>
        <div className="list-group">
            {categories}
        </div>
    </div>
  )
}
export default CategoryMenu;