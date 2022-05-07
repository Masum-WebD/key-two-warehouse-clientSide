import React from "react";
import { Link as button, useNavigate } from "react-router-dom";
import {useParams } from 'react-router-dom';
import "./Product.css";

const Product = ({product }) => {
  const { _id,img, name, description, price, supplier, quantity } = product;
 const  navigate=useNavigate()
  const handleInventory=(id)=>{
    navigate(`/inventory/${id}`)
  }
  return (
    <div className="card product g-4">
      <img style={{height:'150px'}} src={img} alt="" />
      <h5> Name:{name}</h5>
      <p>{description}</p>
      <h5 className='mt-0'>Price:{price}</h5>
      <p className='mt-0'>Quantity:{quantity}</p>
      <p className='mt-0'>Supplier:{supplier}</p>
    <button  onClick={()=>handleInventory(_id)} className='update-button text-black text-decoration-none'>Update product</button>
</div>
  );
};

export default Product;
