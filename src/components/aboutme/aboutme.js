import React from 'react';
import './aboutme.css';
// import react icons library
import { BsGithub, BsLinkedin } from "react-icons/bs";

function AboutMe() {

    return (
        <>
            <section id="about-container">
                <div id="about-me"></div>
                <div className="about-container" id="profile">
                    <img id="profile-photo" src="/images/profile2.png" alt="profile"></img>
                    <div className="title">
                        <h1>Hdit Eban</h1>
                        <h5>Junior Software Developer</h5>
                    </div>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/hditeban/" target="_blank" rel="noreferrer"><BsLinkedin className="icons" /></a>
                        <a href="https://github.com/hyeb96" target="_blank" rel="noreferrer"><BsGithub className="icons" /></a>
                    </div>
                </div>
                <div className="about-container" id="description">
                    <div className="caption">
                        <h1 id="header">ABOUT ME</h1>
                        <p>I am a software developer based in Charlotte, North Carolina with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. I am a highly motivated individual seeking an opportunity to provide, design, and develop technological solutions to clients and building exceptional user experiences through websites and web applications. </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;