import React from 'react';
import "./Contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast';


const Contact = () => {
const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gjpltrv', 'template_hlp5qfp', form.current, 'SfMghQnfy_fz_Ej4B')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            e.target.reset()
            toast.success("Your Email Has Been Sent")
    };


    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                {/* options */}
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>abirhasanopp@gmail.com</h5>
                        <a href="mailto:abirhasanopp@gmail.com">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messanger</h4>
                        <h5>Abir Hasan</h5>
                        <a href="https://m.me/100056037674167">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+23569875421</h5>
                        <a href="https://api.whatsapp.com/send?phone=+23569875421">Send a Message</a>
                    </article>
                </div>


                {/* contact form */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email'  required/>
                    <textarea name="message" rows="7" placeholder='Your Message'></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;