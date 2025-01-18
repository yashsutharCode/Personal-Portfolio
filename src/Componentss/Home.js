import React from 'react'
import './Home.css'

function Home() {
  return (
   <>
   <div className="homee">
   <div id='home' className="hero">
   <div className="lefthero">
    <h1>Front-End React <br/>  Developer<img id='rem' src="/images/waving.1bae5fcfb51082b5c2b4.png" alt="" />
    </h1>
    <p id='big'>Hi, I'm Yash Suthar. A passionate Front-end React <br />
        Developer based in Mumbai & Rajasthan. 📍</p>
      <div className="para" ><p>
        Hi, I'm Yash Suthar a passionate Frontend React Developer based  in Mumbai & Rajasthan. 📍
        </p>     </div>
        <div className="linkss">
    <div className="link3">

    <a id='firstlink' href='https://www.linkedin.com/in/yash-suthar-23140028b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src="/linkedinLogo.png" alt="" /></a>
       <a href='https://github.com/yashsutharCode'> <img src="/images/github.png" alt="" /></a>
       <a id='two' href='https://www.instagram.com/yashsuthar_2003/profilecard/?igsh=cTM0aThqN2Z3ZjU0'><img src="/images/download.jpeg" alt="" /></a>  
    </div>
    </div>
   </div>
   <div className="righthero">
      <img src="/images/hero-main.jpg" alt="" />
    </div>
     </div>
     {/*
    <div className="skills">
    <p id='skills'>Tech Stack |</p>
    
        
    <img src="/images/logo-2582748_960_720.webp" alt="" />
    <img src="/images/logo-2582747_1280.webp" alt="" />
    <img src="/images/OIP (2).png" alt="" />
    <img src="/images/OIP (1).jpg" alt="" />
    <img id='tal' src="/images/image_processing20210620-5261-1izw9zf.png" alt="" />
    <img src="/images/bootstrap-icon-png-1.png" alt="" />
    <img id='tal' src="/images/tailwind.png" alt="" />
   </div> 
  
   <div className="skills22">
    <div className="sk">
    <img src="/images/logo-2582748_960_720.webp" alt="" />
    <img src="/images/logo-2582747_1280.webp" alt="" />
    <img src="/images/OIP (2).png" alt="" />
    <img src="/images/OIP (1).jpg" alt="" />
   </div>
    <br/>
    <div className="sks">
    <img id='tal' src="/images/image_processing20210620-5261-1izw9zf.png" alt="" />
    <img src="/images/bootstrap-icon-png-1.png" alt="" />
    <img id='tal' src="/images/tailwind.png" alt="" />
   </div>
    */}
   <div className="skills">
    <logo><img src="/images/logo-2582748_960_720.webp" alt="HTML" />HTML</logo>
    <logo><img src="/images/logo-2582747_1280.webp" alt="CSS" />CSS</logo>
    <logo><img src="/images/OIP (2).png" alt="JavaScript" />JAVASCRIPT</logo>
    <logo><img src="/images/logo512.png" alt="React" />REACT</logo>
    <logo><img src="/images/png-transparent-next-js-hd-logo.png" alt="Next.js" />NEXT.JS</logo>
    <logo><img src="/images/tailwind.png" alt="Tailwind" />TAILWIND</logo>
    <logo><img src="/images/material-ui-icon-2048x1626-on580ia9.png" alt="Material UI" />MUI</logo>
    <logo><img src="/images/bootstrap-icon-png-1.png" alt="Bootstrap" />BOOTSTRAP</logo>
</div>
  </div>
   
   </>
  )
}

export default Home