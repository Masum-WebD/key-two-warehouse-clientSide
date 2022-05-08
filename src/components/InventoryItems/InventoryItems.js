import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './InventoryItems.css'

const InventoryItems = () => {
  const numberRef = useRef()
  const { inventoryId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/products/${inventoryId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [inventoryId]);


  const handleDeliveredToQuantity = (id) => {
    const url = `http://localhost:5000/products/${id}`;

    if (product.quantity > 0) {
        product.quantity = product.quantity - 1;
        setProduct({ ...product });

    }
    else {
        alert('add product');
    }
    const quantities = product.quantity;
    console.log(quantities);
    //update Quantity

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantities: quantities })
    })
        .then(res => res.json())
        .then(data => {
          console.log(data);
            product.quantity = quantities;
            setProduct({ ...product })
        })
}

const handleAddQuantity=(id )=>{
  const url = `http://localhost:5000/products/${id}`;

  const countQuantity =numberRef.current.value
  // const inputNumberQuantity =parseInt(countQuantity)
  console.log(countQuantity);
    if (product.quantity > 0) {
        product.quantity = product.quantity +countQuantity;
        setProduct({ ...product });

    }
    else {
        alert('add product');
    }
    const quantities =product.quantity;
    console.log(quantities);
    //update Quantity

    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantities: parseInt(quantities) })
    })
        .then(res => res.json())
        .then(data => {
          console.log(data);
            product.quantity = quantities;
            setProduct({ ...product })
        })
}

  return (
    <div>
      <h1 className="text-center">Product name: {product.name}</h1>

      <div className="row">
        <div className="col-md-6">
          <div className="card mx-auto product g-4 w-50">
            <img
              style={{ height: "150px", width: "150px" }}
              src={product.img}
              alt=""
            />
            <h5> Name:{product.name}</h5>
            <h5 className="mt-0">Price:{product.price}</h5>
            <p className="mt-0">Quantity:{product.quantity}</p>
            <p className="mt-0">Supplier:{product.supplier}</p>
            <p className='sold'>Sold</p>
            <button onClick={()=>handleDeliveredToQuantity(product._id)} className="btn btn-primary">Delivered</button>
          </div>
        </div>
        <div className="col-md-6">
          <input ref={numberRef} type="text" placeholder='Add Quantity' />
          <button onClick={()=>handleAddQuantity(product._id)} className='btn btn-primary'>Add Quantity</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default InventoryItems;
