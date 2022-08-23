import React from 'react'
import './navbar.css';
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <div id="navbar">
            <div id='logo'>
                <img id='logo-image' src='images/logo.png' alt='logo'></img>
            </div>
            <ul>
                <li>
                    <Link to="/" smooth>Home</Link>
                </li>
                <li>
                    <Link to="#my-work" smooth >My works</Link>
                </li>
                <li>
                    <Link to="#technology" smooth >Technology</Link>
                </li>
                <li>
                    <Link to="#contact" smooth >Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;