import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user]=useAuthState(auth)
  const [addItem,setAddItem]=useState([])
  useEffect(()=>{
    const email =user?.email
      fetch(`http://localhost:5000/addProducts?email=${email}`)
      .then(res=>res.json())
      .then(data=>setAddItem(data))
  },[user])

  
  return (
    <div>
      <h1> My Item page:{addItem.length}</h1>
      <div className='container products mb-5 mx-auto'>
          
      </div>
      
    </div>
  );
};

export default MyItem;
