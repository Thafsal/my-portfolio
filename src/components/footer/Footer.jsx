import React from 'react';
import "./footer.css";
import {FaFacebookF} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>THAFSAL AFREEDH</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/thafsal.afreedh.9" target="__blank"><FaFacebookF /></a>
        <a href="https://instagram.com/thafsalafreedh" target="__blank"><FaInstagram /></a>
        <a href="https://wa.me/+919544216529" target="__blank"><FaWhatsapp /></a>
      </div>
      <div className="footer__copyright">
        <small>Thafsal Afreedh Portfolio . All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer