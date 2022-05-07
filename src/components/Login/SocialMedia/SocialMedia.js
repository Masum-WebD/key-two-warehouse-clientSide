import React from "react";
import google from "../../../Images/social/google.png"
import github from "../../../Images/social/github.png"
import facebook from "../../../Images/social/facebook.png"
import {useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialMedia = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
  const [signInWithGithub, useGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
 
  const navigate =useNavigate()
  let errorMessage
  if(errorGoogle || errorFacebook ||errorGithub){
    errorMessage = <div>
      <p style={{color:'red'}}>Error: {errorGoogle?.message} {errorFacebook?.message}</p>
    </div>
  }

 if(userGoogle || userFacebook ||useGithub){
  navigate('/home')
 }
  return (
    <div>
      <div className='d-flex align-items-center'>
        <div style={{height:'1px'}} className='bg-primary w-50'></div>
        <p className='mt-3 px-2'>Or</p>
        <div style={{height:'1px'}} className='bg-primary w-50'></div>
        
      </div>
      {
          errorMessage
        }

      <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-flex mx-auto justify-content-center align-items-center mb-2'>
          <img src={google} alt="" />
          <p className="mx-2 mt-2">Google sign in</p>
      </button>
      <button onClick={()=>signInWithGithub()} className='btn btn-info w-50 d-flex mx-auto justify-content-center align-items-center  mb-2'>
          <img src={github} alt="" />
          <p className="mx-2 mt-2">Github sign in</p>
      </button>
      <button onClick={()=>signInWithFacebook()} className='btn btn-info w-50 d-flex mx-auto justify-content-center align-items-center mb-2'>
          <img style={{width:'30px', height:'30px'}} src={facebook} alt="" />
          <p className="mx-2 mt-2">Facebook sign in</p>
      </button>
    </div>
  );
};

export default SocialMedia;
