import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <p>&copy; {currentYear} Kristin Bodvarsdottir. All rights reserved.</p>
      <p>Built with React and Chart.js</p>
    </footer>
  );
};

export default Footer;
