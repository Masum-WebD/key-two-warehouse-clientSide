import React from "react";
import "./Review.css";
import imgOne from "../../Images/Review/man1.png";
import imgTwo from "../../Images/Review/man2.png";
import imgThree from "../../Images/Review/man3.png";

const Review = () => {
  return (
    <div>
      <h1 className="mt-3 text-center fw-bold">Reviews</h1>
      <div className=" review  ">
        <div className="me-5 text-center mt-3 ">
          <img className="rounded-circle" src={imgOne} alt="" />
          <p className="">Lomror</p>
          <small>
            I am very happy to be able to do business with this company. 
          </small>
        </div>
        <div className=" me-5 text-center mt-3">
          <img className="rounded-circle" src={imgTwo} alt="" />
          <p className="">Harshal Patel</p>
          <small>This company is very helpful and product is very good</small>
        </div>
        <div className=" me-5 text-center mt-3">
          <img className="rounded-circle" src={imgThree} alt="" />
          <p className="">Ruturaj Gaikwad</p>
          <small>There are always enough products available here. This is very good for us</small>
        </div>
      </div>
    </div>
  );
};

export default Review;
