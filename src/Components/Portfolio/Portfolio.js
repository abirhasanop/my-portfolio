import React from 'react';
import "./Portfolio.css"
// import IMG1 from '../../assets/portfolio1.jpg'
// import IMG2 from '../../assets/portfolio2.jpg'
// import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [projects, setProjects] = useState([])

    // const projects = [
    //     { name: "Ad Verse", githubLink: "https://github.com/abirhasanop/ad-verse", liveLink: "https://assingment12-68cd6.web.app/", img: IMG4},
    //     { name: "Meta School", githubLink: "https://github.com/abirhasanop/meta-school", liveLink: "https://assignment-10-d5ca4.web.app/", img: IMG2},
    //     { name: "Truss Plumbing", githubLink: "https://github.com/abirhasanop/ad-verse", liveLink: "https://assignment-11-ad206.web.app/", img: IMG3}
    // ]

    useEffect(() => {
        fetch(`projects.json`)
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])




    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>


            <div className='container portfolio__container'>
                {
                    projects?.map((project, i) => {
                        const {name, githubLink, liveLink, img, id} = project
                        return (
                            <article key={i} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img src={img} alt="" />
                                </div>
                                <h3>{name}</h3>
                                <div className='text-light'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem aut a velit placeat molestias consequuntur architecto incidunt soluta amet!</p>
                                </div>
                                <div className='portfolio__item-btns'>
                                    <div className="portfolio__item-cta">
                                        <a href={githubLink} className='btn'>github</a>
                                        <a href={liveLink} className='btn btn-primary' rel='noreferrer' target="_blank">Live Demo</a>
                                    </div>

                                    <div>
                                        <Link to={`/project/${id}`} className='btn-details'>
                                            Details
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;