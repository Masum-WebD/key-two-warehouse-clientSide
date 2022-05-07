import React, { useEffect, useState } from 'react';
const ManageItems = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h2> Manage Items page :{products.name}</h2>
            
        </div>
    );
};

export default ManageItems;