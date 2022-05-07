import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

import "./Login.css";
import SocialMedia from "./SocialMedia/SocialMedia";

const Login = () => {
  const emailRef = useRef()
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, errorResrt] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  let errorMessage;
  if (error) {
    errorMessage=
      <div>
        <p style={{color: 'red'}}>Error: {error?.message}</p>
      </div>
   
  }
  if(user){
    navigate(from, { replace: true });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    await signInWithEmailAndPassword(email, password);
    navigate("/home");
  };

  const handleResetPass = async (e) => {
    const email =emailRef.current.value;
    console.log(email);
    if(email){
      await sendPasswordResetEmail(email)
      toast('Sent email')
    }
    else{
      toast('Please enter your email address')
    }
      
  };
  return (
    <div className="w-50 mx-auto login-container">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin} className="form-container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            className="input-field"
            ref={emailRef}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            className="input-field"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          className="d-flex mx-auto fw-bold"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
        {
          errorMessage
        }

        
        
      </Form>
      <div>
      <p className="text-center">
          Are you new?{" "}
          <Link
            to="/register"
            className="text-danger text-decoration-none pe-auto"
          >
            Please Register
          </Link>
        </p>
        <p className=" text-center">
          Forget password?{" "}
          <button
            onClick={handleResetPass}
            className="btn btn-link text-primary pe-auto text-decoration-none"
          >
            Reset password
          </button>
        </p>
      </div>
     

      <ToastContainer></ToastContainer>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Login;
