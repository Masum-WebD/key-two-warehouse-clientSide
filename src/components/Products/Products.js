import React, { useEffect, useState } from 'react';
import useProducts from '../Hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'




const Products = () => {
    const [products]=useProducts()
    // const [products,setProducts] =useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data =>setProducts(data))
    // },[])
    return (
        <div id="products">
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