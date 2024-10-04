import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <h1>My Services</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Unique and customized services to boost your business.</p>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <div className="icon"><img src="image8.png" alt="Web Developer"/></div>
          <h3>Web Developer</h3>
          <p>Building state-of-the-art, easy to use, user-friendly websites and applications is truly a passion of mine.</p>
          <a href="">Read More</a>
        </div>
        <div className="service-card">
          <div className="icon"><img src="image9.png" alt="UI/UX Designer"/></div>
          <h3>UI/UX Designer</h3>
          <p>I aim to create a perfect user interface and user experience with keen attention to detail.</p>
          <a href="">Read More</a>
        </div>
        <div className="service-card">
          <div className="icon"><img src="image10.png" alt="Mobile Developer"/></div>
          <h3>Mobile Developer</h3>
          <p>Develop high-quality mobile applications for both Android and iOS platforms.</p>
          <a href="">Read More</a>
        </div>
        <div className="service-card">
          <div className="icon"><img src="image11.png" alt="iOS Developer"/></div>
          <h3>iOS Developer</h3>
          <p>Specializing in creating advanced iOS applications with Swift and Objective-C.</p>
          <a href="">Read More</a>
        </div>
        <div className="service-card">
          <div className="icon"><img src="image12.png" alt="Freelance Projects"/></div>
          <h3>Freelance Projects</h3>
          <p>Available for freelance projects that require innovative solutions and a dynamic approach.</p>
          <a href="">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default Services;
