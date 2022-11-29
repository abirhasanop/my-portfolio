import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { ImFacebook2 } from "react-icons/im"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><ImFacebook2 /></a>
        </div>
    );
};

export default HeaderSocials;