import React from 'react';
import './ProjectDetails.css'
import { useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Contact from '../../Components/Contact/Contact';

const ProjectDetails = () => {

    const { id } = useParams()

    // const products = useLoaderData()

    const products = [
        {
            name: "Ad Verse",
            githubLink: "https://github.com/abirhasanop/ad-verse",
            liveLink: "https://assingment12-68cd6.web.app/",
            img: "https://i.ibb.co/N9s1gJ7/adverse.png",
            id: '1',
            description: "Ad Verse is resale platform Where user can buy-sell his/her 2nd product. Firstly user need to sign up as seller or buyer. I have implemented the firebase authincation for that. The user information will be inserted to the data base and for that I have used MongoDb. After creating a seller account, the seller can see Add Product Route where the seller can ad his/her product. After adding product the seller can adverize it in the Features section. The seller can also delete his/ her product. The buyer can buy product. The will see only product section. He can pay his/her payment with stripe. The admin can see all buyers, all sellers. The admin can delete any sellers or buyers. I've also implemented the verification features where admin can verify a seller. After verifying a seller's account, a blue tick will show infront of his name"
        },
        {
            name: "Meta School",
            githubLink: "https://github.com/abirhasanop/meta-school",
            liveLink: "https://assignment-10-d5ca4.web.app/",
            img: "https://i.ibb.co/0yDWHkJ/meta-School.png",
            id: '2',
            description: "Meta School is resale platform Where user can buy-sell his/her 2nd product. Firstly user need to sign up as seller or buyer. I have implemented the firebase authincation for that. The user information will be inserted to the data base and for that I have used MongoDb. After creating a seller account, the seller can see Add Product Route where the seller can ad his/her product. After adding product the seller can adverize it in the Features section. The seller can also delete his/ her product. The buyer can buy product. The will see only product section. He can pay his/her payment with stripe. The admin can see all buyers, all sellers. The admin can delete any sellers or buyers. I've also implemented the verification features where admin can verify a seller. After verifying a seller's account, a blue tick will show infront of his name"
        },
        {
            name: "Truss Plumbing",
            githubLink: "https://github.com/abirhasanop/ad-verse",
            liveLink: "https://assignment-11-ad206.web.app/",
            img: "https://i.ibb.co/LNBDpfW/truss-plumbing.png",
            id: '3',
            description: "Truss Plumbing is resale platform Where user can buy-sell his/her 2nd product. Firstly user need to sign up as seller or buyer. I have implemented the firebase authincation for that. The user information will be inserted to the data base and for that I have used MongoDb. After creating a seller account, the seller can see Add Product Route where the seller can ad his/her product. After adding product the seller can adverize it in the Features section. The seller can also delete his/ her product. The buyer can buy product. The will see only product section. He can pay his/her payment with stripe. The admin can see all buyers, all sellers. The admin can delete any sellers or buyers. I've also implemented the verification features where admin can verify a seller. After verifying a seller's account, a blue tick will show infront of his name"
        }
    ]


    const product = products?.find(p => p.id === id)

    const { name, img, githubLink, liveLink, description } = product

    return (
        <>
            <main className='container product__details__container'>
                <div className='project__image'>
                    <img src={img} alt="" />
                </div>

                <div className='project__details'>
                    <h1>{name}</h1>
                    <p>{description}</p>



                    <div className='portfolio__item-btns'>
                        <div className="portfolio__item-cta">
                            <a href={githubLink} className='btn' rel='noreferrer' target="_blank">github</a>
                            <a href={liveLink} className='btn btn-primary' rel='noreferrer' target="_blank">Live Demo</a>
                        </div>

                        <div>
                            <Link to={`/`} className='btn-details'>
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Contact />
        </>
    );
};

export default ProjectDetails;