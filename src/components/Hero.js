import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <h2>Hi, I'm Kristin Bodvarsdottir</h2>
      <p>
        Front-End Developer & Data Analyst passionate about creating beautiful,
        data-driven web experiences
      </p>
      <button className="cta-button" onClick={scrollToContact}>
        Get In Touch
      </button>
    </section>
  );
};

export default Hero;
