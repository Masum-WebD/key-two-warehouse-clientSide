import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

import './Login.css'
import SocialMedia from "./SocialMedia/SocialMedia";


const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate =useNavigate()

const handleLogin=async(e)=>{
  e.preventDefault();
  const email=e.target.email.value;
  const password=e.target.password.value;
  console.log(email,password);
  await signInWithEmailAndPassword(email,password);
  navigate('/home')

}

const handleResetPass=()=>{
  
}
  return (
    <div className='w-50 mx-auto login-container'>
        <h3>Please Login</h3>
      <Form onSubmit={handleLogin} className='form-container'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className='input-field' type="email" name='email' placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control className='input-field' type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Button  className='d-flex mx-auto fw-bold' variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className='text-center'>Are you new? <Link  to='/register'  className='text-danger text-decoration-none pe-auto'>Please Register</Link></p>
      <p className=' text-center'>Forget password? <button  onClick={handleResetPass} className='btn btn-link text-primary pe-auto'>Reset password</button></p>
      <SocialMedia></SocialMedia>
      
    </div>
  );
};

export default Login;
