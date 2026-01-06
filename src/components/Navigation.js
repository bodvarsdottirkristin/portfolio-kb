import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <div className="container">
        <h1>KB Portfolio</h1>
        <ul>
          <li><a onClick={() => scrollToSection('about')} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('analytics')} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('analytics')}>Analytics</a></li>
          <li><a onClick={() => scrollToSection('contact')} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
