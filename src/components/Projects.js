import React from 'react';
import './Projects.css';
function Projects() {
  const projects = [
    {
      title: 'Responsive Portfolio Website',
      description: 'A responsive portfolio built with HTML, CSS, and JavaScript.',
      image: 'image3.png'
    },
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce site built with React and Node.js.',
      image: 'image5.jpeg'
    },
    {
      title: 'Mobile App Landing Page',
      description: 'A landing page for a mobile app, built using Bootstrap.',
      image: 'image4.jpg'
    },
    {
      title: 'Restaurant Reservation System',
      description: 'A restaurant reservation web app built with Python and Flask.',
      image: 'image7.jpeg'
    },
    {
      title: 'Blog Platform',
      description: 'A blog platform built with Django, featuring user authentication.',
      image: 'image6.jpeg'
    }
  ];

  return (
    <section className="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
