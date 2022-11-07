import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import './Header.css';



const HeaderSocial = () => {
  return (
    <dic className="header__socials">
        <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin /></a>
        <a href="https://www.github.com/" target="_blank"><AiFillGithub/></a>
        <a href="https://www.instagram.com/" target="_blank"><AiFillInstagram/></a>
    </dic>
  )
}

export default HeaderSocial