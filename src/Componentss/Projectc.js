import React from 'react';
import './Projectc.css';

function Projectc() {
  return (
    <section id="projects" className="project">
      <div className="container">

        {/* First Project */}

        <div className="project-content project-bg-blue">
          <div className="project-details">
            <h2 className="project-title">
              <span className="digi">Digi</span>
              <span className="promo">Promo</span>
             </h2>
            <p className="project-description">
            Our advertising program offers expert services to boost your product's visibility with tailored campaigns that maximize reach and impact. We use AOS for stunning animations, creating engaging, dynamic promotions for your brand's success. Explore our services and connect with us directly through the contact form to take your advertising to the next level!
            </p>
            <div className="project-logos">
              <span className="tech-label react">React</span>
              <span className="tech-label react">Vite</span>
              <span className="tech-label react">Tailwind</span>
              <span className="tech-label react">Material Ui</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/yashsutharCode/DigiPromo-Advertise" className="project-button" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://digi-promo.netlify.app/" className="project-button" target="_blank" rel="noopener noreferrer">
                Live URL
              </a>
            </div>
          </div>
          <div className="project-image">
            <video
              src="/images/Screen Recording 2025-01-09 202749.mp4"
              muted
              autoPlay
              loop
              className="project-video"
            />
          </div>
        </div>

        {/* Second Project */}
        <div className="project-content project-bg-red">
          <div className="project-details">
            <h2 className="project-title">
              <span className="z-fashion">Z-</span> 
              <span className="clothing">Fashion</span>
            </h2>
  
            <p className="project-description">
            Shop at Z-Fashion for the latest trends in clothing and footwear. Enjoy a premium collection of stylish, high-quality pieces from top brands. With user login authentication, an easy-to-use add-to-cart feature, and real-time price updating, upgrading your wardrobe has never been more seamless. Shop now and experience fashion, comfort, and unbeatable prices!
            </p>
            <div className="project-logos">
              <span className="tech-label react">HTML</span>
              <span className="tech-label react">CSS</span>
              <span className="tech-label react">JavaScript</span>
              <span className="tech-label react">Bootstrap</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/yashsutharCode/Z-Fashion-Ecommerce-Website" className="project-button" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://zfashion-collection.netlify.app/" className="project-button" target="_blank" rel="noopener noreferrer">
                Live URL
              </a>
            </div>
          </div>
          <div className="project-image">
            <video
              src="/images/Screen Recording 2025-01-09 203212.mp4"
              muted
              autoPlay
              loop
              className="project-video"
            />
          </div>
        </div>

       
        {/* Third Project */}
        <div className="project-content project-bg-green">
          <div className="project-details">
          <h2 className="project-title">
  <span className="personal">Personal</span>
  <span className="portfolio">Portfolio</span>
</h2>

            <p className="project-description">
            Welcome to my portfolio! I’m a skilled frontend web developer passionate about creating intuitive, responsive, and visually engaging websites. I specialize in transforming concepts into seamless digital experiences. Explore my projects, resume, and additional details, and feel free to reach out through the integrated contact form for direct communication. Let’s connect!
            </p>
            <div className="project-logos">
              <span className="tech-label react">HTML</span>
              <span className="tech-label react">CSS</span>
              <span className="tech-label react">JavaScript</span>
              <span className="tech-label react">React</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/your-eco-repo" className="project-button" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://your-eco-demo-link.com" className="project-button" target="_blank" rel="noopener noreferrer">
                Live URL
              </a>
            </div>
          </div>
          <div className="project-image">
            <video
              src="/images/Screen Recording 2025-01-09 203551.mp4"
              muted
              autoPlay
              loop
              className="project-video"
            />
          </div>
        </div>

        {/* Fourth Project */}
        <div className="project-content project-bg-green">
          <div className="project-details">
          <h2 className="project-title">
  <span className="netflix">Netflix</span>
  <span className="clone">Clone</span>
</h2>

            <p className="project-description">
            A Netflix clone is a web platform replicating Netflix’s core functionality, featuring user authentication, streaming video content, user management, content categorization, and personalized recommendations. With a focus on seamless user experience, it enables smooth browsing, secure login, and tailored content suggestions based on user preferences, creating a similar engaging experience to Netflix.
            </p>
            <div className="project-logos">
              <span className="tech-label react">HTML</span>
              <span className="tech-label react">CSS</span>
              <span className="tech-label react">JavaScript</span>
              <span className="tech-label react">React</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/yashsutharCode/Netflix-clone" className="project-button" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://cinevia-2025version-n.netlify.app/" className="project-button" target="_blank" rel="noopener noreferrer">
                Live URL
              </a>
            </div>
          </div>
          <div className="project-image">
            <video
              src="/images/Screen Recording 2025-01-09 203948.mp4"
              muted
              autoPlay
              loop
              className="project-video"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projectc;
