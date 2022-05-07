import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {useParams } from 'react-router-dom';
import { ToastContainer } from "react-toastify";


const InventoryItems = () => {
    const {inventoryId}=useParams();
    const [product ,setProduct]=useState({})
   useEffect(()=>{
       fetch(`http://localhost:5000/products/${inventoryId}`)
       .then(res => res.json())
       .then(data=>setProduct(data))
   },[inventoryId])
  return (
    <div>
      <h1 className="text-center">Product name: {product.name}</h1>

      <div className="card mx-auto product g-4 w-25">
        <img  style={{height:'150px', width:'150px'}} src={product.img} alt="" />
        <h5> Name:{product.name}</h5>
      <h5 className='mt-0'>Price:{product.price}</h5>
      <p className='mt-0'>Quantity:{product.quantity}</p>
      <p className='mt-0'>Supplier:{product.supplier}</p>
      <button className='btn btn-primary'>Delivered</button>

      </div>
      <ToastContainer/>
    </div>
  );
};

export default InventoryItems;
