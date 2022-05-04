import { faBriefcase, faHandshake, faSackDollar, faTruck, faTruckRampBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './ProductSell.css'

const ProductSell = () => {
  return (
    <div>
      <div className="container icon-container">
        <div className=' card me-2'>
          <FontAwesomeIcon className='icon' icon={faTruck}></FontAwesomeIcon>
          <h6 className='text-center fw-bold'> Delivery</h6>
          <small className='p-2'>
            We are delivery products in the world.We deliver the product very carefully during delivery so that it is not damaged. And we bear 50% of the cost of delivery
          </small>
        </div>
        <div className='card me-2' >
          <FontAwesomeIcon className='icon' icon={faSackDollar}></FontAwesomeIcon>
          <h6 className='text-center fw-bold'>Payment</h6>
          <small className='p-2'>
          We transact money in cash. That means the rest of the product is not sold. We carry cash and money through banks.
          </small>
        </div>
        <div className='card me-2'>
          <FontAwesomeIcon className='icon' icon={faBriefcase}></FontAwesomeIcon>
          <h6 className='text-center fw-bold'> Business policy</h6>
          <small className='p-2'>
          We do business with honesty and integrity. So that your business is not harmed. Our products are quality VLO, we are honest and sincere and we do business with such people.
          </small>
        </div>
        <div className='card'>
          <FontAwesomeIcon className='icon' icon={faHandshake}></FontAwesomeIcon>
          <h6 className='text-center fw-bold'> Business partner</h6>
          <small className='p-2'>
          We fully support those who do business with us. So that their business is not harmed.So that my partners are not bad to their buyers.
          </small>
        </div>
      </div>
    </div>
  );
};

export default ProductSell;
