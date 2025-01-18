import React from 'react';
import './About.css';

function Aboutme() {
  return (
    <>
      <div className="aboutt">
        <section className="about" id="about">
          <div className="container">
            <div className="about-content">
              <a href="/ASU_Resume_Template (14).pdf">
                <div className="img-side">
                  <img
                    src="/images/about-img.62b47e7f183d4b4e9feb.webp"
                    alt="mee"
                    className="img-side__main-img"
                  />
                </div>
              </a>

              <div className="text-side">
                <h2>
                  Front-end Developer based in <br /> Mumbai & Rajasthan 📍
                </h2>
                <p id="aboutp">
                  As a frontend developer, I bring expertise in HTML, CSS, JavaScript, and React.js. My skill set enables me to create captivating user interfaces and interactive experiences. I’m dedicated to crafting elegant solutions that prioritize both functionality and aesthetics, ensuring an exceptional user journey.
                  <br />
                  <br />
                  Enthusiastic and adaptable fast learner seeking an entry-level position to apply my technical skills and develop high-quality web solutions in a professional environment.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="skills-section">
           
              <div className="skill">
                <span className="skill-name" style={{ color: '#2C3E50' }}>HTML</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '95%', backgroundColor: '#2C3E50' }}></div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name" style={{  color: '#E74C3C' }}>CSS</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '90%', backgroundColor: '#E74C3C ' }}></div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name"style={{ color: '#6C5CE7' }}>JavaScript</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '80%' , backgroundColor: '#6C5CE7'}}></div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name"style={{  color:'#F1C40F'}}>React</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '85%' , backgroundColor: '#F1C40F'}}></div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name"style={{ color:'#9B59B6' }}>Next.js</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '80%' , backgroundColor: '#9B59B6'}}></div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name"style={{  color: '#95A5A6' }}>Tailwind</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '95%' , backgroundColor: '#95A5A6'}}></div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name"style={{  color: '#1ABC9C' }}>Bootstrap</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '90%' , backgroundColor: '#1ABC9C'}}></div>
                </div>
              </div>
              <div className="skill">
                <span className="skill-name"style={{  color: '#3498DB'}}>Material Ui</span>
                <div className="skill-bar">
                  <div className="skill-level" style={{ width: '85%' , backgroundColor: '#3498DB'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Aboutme;
