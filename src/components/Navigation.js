import React from 'react';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyPress = (e, sectionId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <nav>
      <div className="container">
        <h1>KB Portfolio</h1>
        <ul>
          <li><button onClick={() => scrollToSection('about')} onKeyPress={(e) => handleKeyPress(e, 'about')}>About</button></li>
          <li><button onClick={() => scrollToSection('skills')} onKeyPress={(e) => handleKeyPress(e, 'skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('projects')} onKeyPress={(e) => handleKeyPress(e, 'projects')}>Projects</button></li>
          <li><button onClick={() => scrollToSection('analytics')} onKeyPress={(e) => handleKeyPress(e, 'analytics')}>Analytics</button></li>
          <li><button onClick={() => scrollToSection('contact')} onKeyPress={(e) => handleKeyPress(e, 'contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
