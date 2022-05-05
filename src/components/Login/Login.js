import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Login.css'
import SocialMedia from "./SocialMedia/SocialMedia";

const Login = () => {
  return (
    <div className='w-50 mx-auto login-container'>
        <h3>Please Login</h3>
      <Form className='form-container'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control className='input-field' type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control className='input-field' type="password" placeholder="Password" />
        </Form.Group>
        <Button className='d-flex mx-auto fw-bold' variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className='text-center'>Are you new? <Link to='/register'  className='text-danger text-decoration-none pe-auto'>Please Register</Link></p>
      <SocialMedia></SocialMedia>
      
    </div>
  );
};

export default Login;
