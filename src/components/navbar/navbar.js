import React, { useState } from 'react'
import './navbar.css';
//import react scroll library for navigation links
import { Link } from 'react-scroll';
//import icons 
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <nav id="navbar">
            <div id='logo'>
                <Link to="about-me" smooth={true} offset={-200} duration={500}> <img id='logo-image' src='images/logo.png' alt='logo'></img></Link>
            </div>
            <div id='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={50} />)
                    : (<FaBars size={50} />)}

            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'>
                    <Link to="about-me" spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu} >Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to="my-work" spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu} >My works</Link>
                </li>
                <li className='nav-item'>
                    <Link to="technology" spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu} >Technology</Link>
                </li>
                <li className='nav-item'>
                    <Link to="contact" spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu} >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;