import React from 'react';
import { useForm } from 'react-hook-form';



const AddItem = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {console.log(data)
    
        fetch(`http://localhost:5000/products`,{
            method: 'POST',
            headers: { 'Content-Type':'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            
        })
    
    
    }
    return (
        <div className='w-25 mx-auto mb-5'>
            <h1>Add Item page</h1>
            <form className='d-flex flex-column  ' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-2' placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
        <textarea className='mb-2'  placeholder='Description'{...register("description")} />
        <input className='mb-2' placeholder='price' type="number" {...register('price')} />
        <input className='mb-2' placeholder='Photo url' type="text" {...register ('img')} />
        <input className='mb-2 btn btn-primary' placeholder='' type="submit" value='Add service' />
      </form>
        </div>
    );
};

export default AddItem;