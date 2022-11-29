import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';
import './Header.css'

const Header = () => {
    return (
        <header id='header'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Abir Hasan</h1>
                <h5 className='text-light'>Full Stack Web Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt="" />
                </div>
                <a className='scrool-down' href="#contact">Scrool Down</a>

            </div>
        </header>
    );
};

export default Header;