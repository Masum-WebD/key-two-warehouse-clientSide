import React from 'react';
import img from '../../Images/404.png'

const NotFound = () => {
    return (
        <div>
            <p className='d-flex justify-content-center align-items-center'>
                <img src={img} alt="" />
                <h3 > 404 not found page</h3>
            </p>
        </div>
    );
};

export default NotFound;