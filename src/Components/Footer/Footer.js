import React from 'react';
import "./Footer.css"
import { IoLogoTwitter } from 'react-icons/io'
import { BsGithub } from "react-icons/bs"
import { TfiLinkedin } from "react-icons/tfi"

const Footer = () => {
    return (
        <footer>
            <a href="#_" className='footer__logo'>Abir Hasan</a>


            <ul className='permalinks'>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact ">Contact</a></li>
            </ul>


            <div className='footer__socials'>
                <a data-aos="fade-right" data-aos-delay="400" href="https://www.facebook.com"><BsGithub /></a>
                <a data-aos="zoom-in" data-aos-delay="400" href="https://www.facebook.com"><TfiLinkedin /></a>
                <a data-aos="fade-left" data-aos-delay="400" href="https://www.facebook.com"><IoLogoTwitter /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Abir Hasan. All right reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;