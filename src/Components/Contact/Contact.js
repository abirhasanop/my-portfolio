import React from 'react';
import { MdOutlineEmail } from "react-icons/md"

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
                </div>


                {/* contact form */}
                <form>
                    
                </form>
            </div>
        </section>
    );
};

export default Contact;