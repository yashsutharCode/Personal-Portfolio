// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for the Navbar

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSmoothScroll = (event, targetId) => {
        event.preventDefault(); // Prevent default anchor behavior
        setIsMenuOpen(false); // Close the menu if it's open
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling effect
                block: 'start',    // Align to the top of the target element
            });
        }
    };

    return (
        <nav className="navbar">
            <div className="logo">WebDevYash</div>

            <div className="menu-toggle" onClick={handleMenuToggle}>
                ☰
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
                <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
                <li><a href="#projects" onClick={(e) => handleSmoothScroll(e, '#projects')}>Projects</a></li>
                <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
