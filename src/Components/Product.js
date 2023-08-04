import React from 'react';

function Product(props) {
  return (
    <div>
      <h3>Name: {props.product.name}</h3>
      <p>Description: {props.product.description}</p>
      <h3>Price: {props.product.price}</h3>
      <button onClick={() => alert('You clicked me!')}>Hit</button>
      <hr></hr>
    </div>
  );
}

export default Product;
