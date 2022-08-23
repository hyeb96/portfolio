import React from 'react';
import './aboutme.css';
import { BsGithub, BsLinkedin } from "react-icons/bs";

function AboutMe() {
    return (
        <>
            <section id="about-me">
                <div className="about-container" id="profile">
                    <img src="/images/profile.png"></img>
                    <span className="title">
                        <h1>Hdit Eban</h1>
                        <h5>Junior Software Developer</h5>
                    </span>
                    <button>Email me</button>
                    <span className="links">
                        <BsLinkedin className="icons" />
                        <BsGithub className="icons" />
                    </span>
                </div>
                <div className="about-container" id="description">
                    <div className="caption">
                        <h1 id="header">ABOUT ME</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the remaining essentially unchanged.</p>
                    </div>
                    <button>Resume</button>
                    <button>Portfolio</button>
                </div>
            </section>
        </>
    );
}

export default AboutMe;