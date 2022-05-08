import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import Loading from '../Loading/Loading';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user ,loading] =useAuthState(auth)
    const location =useLocation()
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    if(loading){
       return <Loading></Loading>
    }
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
    if (sending) {
        return <p>Sending...</p>;
      }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    console.log(user);
    if(user.providerData[0]?.providerId ==='password' && !user.emailVerified){
        return <div className="mx-auto p-5">
                <h3 className='text-center'> Your email not verified!please verify your email address</h3>
                <button className="btn btn-primary ms-5"   onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}>Send Verification Email</button>

        <ToastContainer></ToastContainer>
        </div>
    }
    return children
};

export default RequireAuth;