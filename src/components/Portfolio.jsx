import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'App 1', image: 'app1-thumbnail.jpg', deployedUrl: '#', githubUrl: '#' },
    { title: 'App 2', image: 'app2-thumbnail.jpg', deployedUrl: '#', githubUrl: '#' },
    { title: 'App 3', image: 'app3-thumbnail.jpg', deployedUrl: '#', githubUrl: '#' },
    { title: 'App 4', image: 'app4-thumbnail.jpg', deployedUrl: '#', githubUrl: '#' },
    { title: 'App 5', image: 'app5-thumbnail.jpg', deployedUrl: '#', githubUrl: '#' },
    { title: 'App 6', image: 'app6-thumbnail.jpg', deployedUrl: '#', githubUrl: '#' },
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
