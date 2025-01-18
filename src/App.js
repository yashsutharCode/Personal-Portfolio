// src/App.js
import React from 'react';

import Home from './Componentss/Home';



import './App.css'; // Import global styles if needed
import Navbar from './Componentss/Navbar';
import About from './Componentss/About';

import Contactus from './Componentss/Contactus';
import Footer from './Componentss/Footer'
import Projectc from './Componentss/Projectc';

function App() {
    return ( <>
        <div>
            <Navbar />
              <Home/>
            <About/>
            <Projectc/>
            <Contactus/>
            <Footer/>
        </div>
        </>
    );
}

export default App;
