import React from "react";
import google from "../../../Images/social/google.png"
import github from "../../../Images/social/github.png"
import facebook from "../../../Images/social/facebook.png"

const SocialMedia = () => {
  return (
    <div>
      <div className='d-flex align-items-center'>
        <div style={{height:'1px'}} className='bg-primary w-50'></div>
        <p className='mt-3 px-2'>Or</p>
        <div style={{height:'1px'}} className='bg-primary w-50'></div>
      </div>

      <button className='btn btn-info w-50 d-flex mx-auto justify-content-center align-items-center mb-2'>
          <img src={google} alt="" />
          <p className="mx-2 mt-2">Google sign in</p>
      </button>
      <button className='btn btn-info w-50 d-flex mx-auto justify-content-center align-items-center  mb-2'>
          <img src={github} alt="" />
          <p className="mx-2 mt-2">Google sign in</p>
      </button>
      <button className='btn btn-info w-50 d-flex mx-auto justify-content-center align-items-center mb-2'>
          <img style={{width:'30px', height:'30px'}} src={facebook} alt="" />
          <p className="mx-2 mt-2">Google sign in</p>
      </button>
    </div>
  );
};

export default SocialMedia;
