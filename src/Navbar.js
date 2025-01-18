import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for the Navbar

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">WebDevYash</div>
            <div className="logo2">DevYash</div>
            <div className="menu-toggle" onClick={handleMenuToggle}>
                ☰
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#home" onClick={handleMenuToggle}>Home</a></li>
                <li><a href="#about" onClick={handleMenuToggle}>About</a></li>
                <li><a href="#projects" onClick={handleMenuToggle}>Projects</a></li>
                <li><a href="#contact" onClick={handleMenuToggle}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
