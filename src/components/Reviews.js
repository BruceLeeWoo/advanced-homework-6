import React, { Component } from 'react';

class Reviews extends Component{
  constructor(){
    super();
    this.state = {visible:false};
  }
  render(){
    var reviews = this.props.product.reviews;
    var reviewsHtml = "";
    if(this.state.visible){
      reviewsHtml = reviews.map (function(r){
        return <div>{r.description}</div>;
      });
    }else{
      reviewsHtml =  "";
    }
     return (    
     <div>
      {reviews.length} <a href="#"
      onClick={
        (e)=>{
          e.preventDefault();
          this.setState({visible:!this.state.visible});
        }
      }
      >
      {reviews.length <=1 ? "review" : "reviews"}
      </a>
      {reviewsHtml}
    </div>
    )
  }
}
export default Reviews;