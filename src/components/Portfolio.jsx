import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Portfolio', image: '', deployedUrl: '', githubUrl: 'https://github.com/CourtneyPonder/portfolio' },
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
