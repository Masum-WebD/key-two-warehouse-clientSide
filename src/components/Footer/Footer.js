import { faEnvelope, faLocation, faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <h1 className='text-white text-center'>this footer</h1>
            
               
                <p className='text-white text-center '>
                <FontAwesomeIcon className='me-2'  icon={faLocationDot}></FontAwesomeIcon>
                 Level-4, 34, Awal Centre, Banani, Dhaka
            </p>
            <p className='text-white text-center '>
                <FontAwesomeIcon className='me-2'  icon={faEnvelope}></FontAwesomeIcon>
                Official:keytwotelecom@gmail.com
            </p>
            <p className='text-white text-center '>
                <FontAwesomeIcon className='me-2'  icon={faPhone}></FontAwesomeIcon>
                 Helpline: 01701701701 , 01801801801
                 <br />
                 <Link className='text-decoration-none text-center text-white' to='/about'>About us</Link>
            </p>
            <p className='text-white text-center '>
            Copyright © 2022 Programming-hero.com
            </p>
                
        </div>
    );
};

export default Footer;