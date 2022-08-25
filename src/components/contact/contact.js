import React, { useRef } from 'react'
import './contact.css';
//import emailjs library 
import emailjs from "@emailjs/browser";
//import icons 
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
    const form = useRef();

    //send email through emailjs
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <>
            <section id="contact">
                <div className="container">
                    <form ref={form} onSubmit={sendEmail} autocomplete="off" >
                        <h1>Get in touch!</h1>
                        <label>Name</label>
                        <input type="text" name="name" required />
                        <label>Subject</label>
                        <input type="text" name="subject" required />
                        <label>Email</label>
                        <input type="email" name="email" required />
                        <label>Message</label>
                        <textarea name="message" rows="6" />
                        <input type="submit" value="Send" />
                    </form>
                    <div className='info'>
                        <div id="icons">
                            <HiLocationMarker className='icon' />
                            <HiOutlineMail className='icon' />
                            <BsLinkedin className="icon" />
                            <BsGithub className="icon" />
                        </div>
                        <div id="caption">
                            <h1>Charlotte, NC</h1>
                            <h1>eban.hdit@gmail.com</h1>
                            <h1>linkedin.com/hditeban</h1>
                            <h1>github.com/hyeb96</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;