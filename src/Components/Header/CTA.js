import React from 'react';
// import Resume from '../../assets/cv.pdf'
import Resume from "../../assets/Abir-Hasan-Resume.pdf"

const CTA = () => {
    return (
        <div className='cta'>
            <a className='btn' href={Resume} download>Download Resume</a>
            <a className='btn btn-primary' href="#contact">Let's Talk</a>
        </div>
    );
};

export default CTA;