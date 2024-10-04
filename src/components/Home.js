import React from 'react';
import './Home.css'; // Ensure the CSS file is linked

function Home() {
  return (
    <section className="home">
      <div className="intro-container">
        <div className="intro-text">
          <h1>Hello, my name is <span>Sudhanshu Rawat</span>.</h1>
          <p>I am a Web Developer.</p>
          <div className="button-container">
            <button className="email-btn">Email Me</button>
            <a href="About.js"><button className="portfolio-btn">View Portfolio</button></a>
            
          </div>
        </div>
        <div className="profile-image">
          <img src="profile1.jpg" alt="Sudhanshu Rawat" />
        </div>
      </div>
    </section>
  );
}

export default Home;
