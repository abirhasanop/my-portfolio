import React, { useEffect } from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png'
import Abir from "../../assets/withOutBgMe.png"
import HeaderSocials from './HeaderSocials';
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <header id='header' data-aos="fade-down">
            <div className="container header__container">
                <h5 data-aos="fade-right" data-aos-delay="200">Hello I'm</h5>
                <h1 data-aos="fade-left" data-aos-delay="400">Abir Hasan</h1>
                <h5 className='text-light' data-aos="fade-right" data-aos-delay="600">Full Stack Web Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className='me' data-aos="fade-down" data-aos-delay="800">
                    <img src={ME} alt="" />
                </div>
                <a className='scrool-down' href="#contact">Scrool Down</a>
            </div>
        </header>
    );
};

export default Header;