import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Front-End Development',
      skills: [
        'React & React Hooks',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Responsive Design',
        'RESTful APIs',
        'Version Control (Git)'
      ]
    },
    {
      title: 'Data & Analytics',
      skills: [
        'Data Visualization',
        'Chart.js & D3.js',
        'Statistical Analysis',
        'SQL & Databases',
        'Excel & Spreadsheets',
        'Business Intelligence'
      ]
    },
    {
      title: 'Tools & Methodologies',
      skills: [
        'Agile Development',
        'UI/UX Principles',
        'Performance Optimization',
        'Testing & Debugging',
        'Problem Solving',
        'Team Collaboration'
      ]
    }
  ];

  return (
    <section id="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
