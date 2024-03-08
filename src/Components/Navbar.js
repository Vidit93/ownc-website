import React, { useState } from 'react';
import '../Css/Navbar.css' // Assuming you have a separate CSS file for styling
import { useNavigate } from "react-router-dom"

function Navbar() {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };
    const navigate = useNavigate()

    function Homescreen() {
        navigate(`/`)
    }
    function Privacypolicy() {
        navigate(`/privacypolicy`)
    }
    function TermsConditions() {
        navigate(`/terms&conditions`)
    }
    function ContactUs() {
        navigate(`/ContactUs`)
    }
    function AboutUs() {
        navigate(`/aboutus`)
    }

    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <button className={`toggle-btn ${isNavActive ? 'active' : ''}`} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`nav-list ${isNavActive ? 'active' : ''}`} id="navList">
                <li className="nav-item" onClick={Homescreen}><a href="">Home</a></li>
                <li className="nav-item" onClick={AboutUs}><a href="">About</a></li>
                <li className="nav-item"><a href="#">Skills</a></li>
                <li className="nav-item"><a href="#">Projects</a></li>
                <li className="nav-item" onClick={ContactUs}><a href="#">Contact</a></li>
                <li className="nav-item" onClick={Privacypolicy}><a href="">Privacy Policy</a></li>
                <li className="nav-item" onClick={TermsConditions}><a href="">Terms&Conditions</a></li>
                
            </ul>
            
        </nav>
    );
}

export default Navbar;
