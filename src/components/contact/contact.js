import React, { useRef } from 'react'
import './contact.css';
import emailjs from "@emailjs/browser";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

const Contact = () => {
    const form = useRef();

    //send email through emailjs
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_b3t8ppg', 'template_ulaw7cv', form.current, 'JiXGMxtYN7x6lYPOt')
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
                    <h1>Get in touch!</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="name" />
                        <label>Subject</label>
                        <input type="text" name="subject" />
                        <label>Email</label>
                        <input type="email" name="email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;