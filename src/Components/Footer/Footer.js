import React from 'react';
import "./Footer.css"
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
            <a href="#_" className='footer__logo'>MarkiTox</a>


            <ul className='permalinks'>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">Home</a></li>
                <li><a href="#experience">Home</a></li>
                <li><a href="#portfolio">Home</a></li>
                <li><a href="#contact ">Home</a></li>
            </ul>


            <div className='footer__socials'>
                <a href="https://www.facebook.com"><FaFacebookF/></a>
                <a href="https://www.facebook.com"><FiInstagram/></a>
                <a href="https://www.facebook.com"><IoLogoTwitter/></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Abir Hasan. All right reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;