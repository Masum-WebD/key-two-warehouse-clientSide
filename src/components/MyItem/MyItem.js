import React from "react";
import useProducts from '../Hooks/useProducts';

const MyItem = () => {
  const [products,setProducts]=useProducts()

  
  return (
    <div>
      <h1> My Item page</h1>
      <div className='container products mb-5 mx-auto'>
      {
        products.map(product =>
         <div className="card product g-4">
          
        </div>)
      }
      </div>
      
    </div>
  );
};

export default MyItem;
