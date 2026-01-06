import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Let's Connect</h2>
      <p>
        I'm always interested in hearing about new opportunities and projects.
        Feel free to reach out!
      </p>
      <div className="contact-links">
        <a href="mailto:contact@example.com">Email Me</a>
        <a href="https://github.com/bodvarsdottirkristin" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
