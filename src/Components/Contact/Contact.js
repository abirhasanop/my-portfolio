import React from 'react';
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                {/* options */}
                <div className="contact__option">
                    <article>
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>abirhasanopp@gmail.com</h5>
                        <a href="mailto:abirhasanopp@gmail.com">Send a Message</a>
                    </article>
                    <article>
                        <RiMessengerLine />
                        <h4>Messanger</h4>
                        <h5>Abir Hasan</h5>
                        <a href="https://m.me/100056037674167">Send a Message</a>
                    </article>
                    <article>
                        <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>+23569875421</h5>
                        <a href="https://api.whatsapp.com/send?phone=+23569875421">Send a Message</a>
                    </article>
                </div>


                {/* contact form */}
                <form action=''>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email'  required/>
                    <textarea name="message" rows="7" placeholder='Your Message'></textarea>
                </form>
            </div>
        </section>
    );
};

export default Contact;