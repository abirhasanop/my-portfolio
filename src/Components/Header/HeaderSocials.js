import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs"
import { ImFacebook2 } from "react-icons/im"

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/abir-hasan2/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/abirhasanop" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://www.facebook.com/profile.php?id=100056037674167" target="_blank" rel="noreferrer"><ImFacebook2 /></a>
        </div>
    );
};

export default HeaderSocials;