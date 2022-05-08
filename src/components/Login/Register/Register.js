import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialMedia from '../SocialMedia/SocialMedia';

const Register = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate()
  const handleRegister=async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password)
    navigate('/home')
  }
    return (
        <div className='w-50 mx-auto login-container'>
            <h3 className='text-center'>Please Register</h3>
      <Form onSubmit={handleRegister} className='form-container'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name='name' className='input-field' type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control name='email' className='input-field' type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control name='password' className='input-field' type="password" placeholder="Password" />
        </Form.Group>
        <Button className='d-flex mx-auto fw-bold' variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p className='text-center'>Are you new? <Link to='/login'  className='text-danger text-decoration-none pe-auto'>Please Register</Link></p>
      <SocialMedia></SocialMedia>
      
    </div>
    );
};

export default Register;