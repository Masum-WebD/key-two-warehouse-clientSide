import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="text-white text-center ">
        <FontAwesomeIcon
          className="me-2"
          icon={faLocationDot}
        ></FontAwesomeIcon>
        Level-4, 34, Awal Centre, Banani, Dhaka
      </p>
      <p className="text-white text-center ">
        <FontAwesomeIcon className="me-2" icon={faEnvelope}></FontAwesomeIcon>
        Official:keytwotelecom@gmail.com
      </p>
      <p className="text-white text-center ">
        <FontAwesomeIcon className="me-2" icon={faPhone}></FontAwesomeIcon>
        Helpline: 01701701701 , 01801801801
        <br />
        <Link
          className="text-decoration-none text-center text-white"
          to="/about"
        >
          About us
        </Link>
      </p>
      <p className="text-white text-center ">
        Copyright © 2022 key-two-telecom.com
      </p>
    </div>
  );
};

export default Footer;
