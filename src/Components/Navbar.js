import React, { useState } from 'react';
import '../Css/Navbar.css' // Assuming you have a separate CSS file for styling

function Navbar() {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleNav = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <nav className="navbar">
            <div className="logo">Logo</div>
            <button className={`toggle-btn ${isNavActive ? 'active' : ''}`} onClick={toggleNav}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`nav-list ${isNavActive ? 'active' : ''}`} id="navList">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Skills</a></li>
                <li className="nav-item"><a href="#">Projects</a></li>
                <li className="nav-item"><a href="#">Contact</a></li>
                
            </ul>
            
        </nav>
    );
}

export default Navbar;
