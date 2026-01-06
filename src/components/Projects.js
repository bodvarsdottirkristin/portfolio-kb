import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for tracking sales, inventory, and customer analytics with real-time data visualization.',
      tags: ['React', 'Chart.js', 'REST API', 'Data Visualization']
    },
    {
      title: 'Responsive Portfolio Site',
      description: 'Modern, mobile-first portfolio website showcasing projects with smooth animations and interactive elements.',
      tags: ['React', 'CSS3', 'Responsive Design', 'UI/UX']
    },
    {
      title: 'Data Analysis Tool',
      description: 'Web-based tool for analyzing CSV data, generating insights, and creating interactive visualizations.',
      tags: ['JavaScript', 'Data Analysis', 'Chart.js', 'Statistics']
    },
    {
      title: 'Task Management App',
      description: 'Intuitive task tracker with data analytics showing productivity trends and completion rates.',
      tags: ['React', 'Local Storage', 'Analytics', 'Charts']
    },
    {
      title: 'Weather Visualization',
      description: 'Interactive weather data visualization showing temperature trends, precipitation patterns, and forecasts.',
      tags: ['React', 'API Integration', 'Data Viz', 'Charts']
    },
    {
      title: 'Budget Tracker',
      description: 'Personal finance application with visual breakdowns of spending categories and savings trends.',
      tags: ['React', 'Charts', 'Financial Analytics', 'UI Design']
    }
  ];

  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
