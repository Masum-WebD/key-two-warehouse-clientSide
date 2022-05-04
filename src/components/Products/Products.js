import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'




const Products = () => {
    const [products,setProducts] =useState([])
    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div>
            <h1 className='mt-3 text-center fw-bold'> Stock Products</h1>
         <div className='container products mb-5 mx-auto'>
         {
              products.map(product =><Product key={product._id} product={product}></Product>)
          }

         </div>
        </div>
    );
};

export default Products;