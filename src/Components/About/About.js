import React from 'react';
import './About.css'
import Me from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import SpaceImg from "../../assets/037911dc101566138298ddf0a1e62603.gif"

const About = () => {


    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div data-aos="fade-right" data-aos-delay="200" className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={SpaceImg} alt="" />
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-delay="400" className='about__content'>
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Years Experience</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>30+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div>


                    <p>As a web developer, I am passionate about using my skills and knowledge to create innovative and user-friendly websites. With experience in a range of technologies including HTML, CSS, JavaScript, React, Node Js, etc, I am well-equipped to tackle any project. I am a team player and enjoy collaborating with designers and other developers to bring web projects to life. I am dedicated to staying up to date with the latest developments in the field and am always looking for opportunities to learn and grow.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>
            </div>
        </section>
    );
};

export default About;