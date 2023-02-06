import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs'
import './Experience.css'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>The Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div data-aos="fade-right" data-aos-delay="400" className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Html</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Css</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Javascript</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Tailwind</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>React</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>


                <div data-aos="fade-left" data-aos-delay="400" className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Node Js</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Express Js</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Mongoose</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Tailwind</h4>
                                <small>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;