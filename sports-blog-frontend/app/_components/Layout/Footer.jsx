import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="#"style={{ fontSize: '20px' }} ><FaFacebook /></a>
          <a href="#" style={{ fontSize: '20px' }}><FaInstagram /></a>
          <a href="#" style={{ fontSize: '20px' }}><FaYoutube /></a>
          <a href="#" style={{ fontSize: '20px' }}><FaTwitter /></a>
        </div>

        <div className="row">
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            
          </ul>
        </div>

        <div className="row">
          Zyphr Copyright © 2024 Sports Blog - All rights reserved || Designed By: Niladri
        </div>
      </div>
    </footer>
  );
};

export default Footer;
