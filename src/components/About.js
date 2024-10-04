import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="profile-image">
          <img src="profile1.jpg" alt="Your Name" />
        </div>
        <div className="about-content">
          <h2>Developer & Designer</h2>
          <p>Hi, I'm Sudhanshu Rawat, a front-end web developer. I provide clean code and pixel-perfect design. I also make the website more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device.</p>
          <a href="/resume.pdf" target="_blank" className="resume-button">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
