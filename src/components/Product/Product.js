import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { img, name, description, price, supplier, quantity } = product;
  return (
    <div class="card product g-4">
      <img style={{height:'150px'}} src={img} alt="" />
      <h5> Name:{name}</h5>
      <p>{description}</p>
      <h5 className='mt-0'>Price:{price}</h5>
      <p className='mt-0'>Quantity:{quantity}</p>
      <p className='mt-0'>Supplier:{supplier}</p>
    <button className='update-button'>Update product</button>
</div>
  );
};

export default Product;
