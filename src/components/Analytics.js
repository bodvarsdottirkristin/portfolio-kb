import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  // Skills proficiency data
  const skillsData = {
    labels: ['React', 'JavaScript', 'CSS', 'Data Viz', 'SQL', 'Analytics'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [90, 85, 88, 82, 75, 80],
        backgroundColor: [
          'rgba(102, 126, 234, 0.8)',
          'rgba(118, 75, 162, 0.8)',
          'rgba(102, 126, 234, 0.8)',
          'rgba(118, 75, 162, 0.8)',
          'rgba(102, 126, 234, 0.8)',
          'rgba(118, 75, 162, 0.8)',
        ],
        borderColor: [
          'rgba(102, 126, 234, 1)',
          'rgba(118, 75, 162, 1)',
          'rgba(102, 126, 234, 1)',
          'rgba(118, 75, 162, 1)',
          'rgba(102, 126, 234, 1)',
          'rgba(118, 75, 162, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  // Project timeline data
  const projectTimelineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Projects Completed',
        data: [2, 3, 2, 4, 3, 5],
        borderColor: 'rgba(102, 126, 234, 1)',
        backgroundColor: 'rgba(102, 126, 234, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // Technology usage distribution
  const techDistributionData = {
    labels: ['Front-End', 'Data Analysis', 'APIs', 'Design', 'Testing'],
    datasets: [
      {
        data: [35, 25, 15, 15, 10],
        backgroundColor: [
          'rgba(102, 126, 234, 0.8)',
          'rgba(118, 75, 162, 0.8)',
          'rgba(102, 126, 234, 0.6)',
          'rgba(118, 75, 162, 0.6)',
          'rgba(102, 126, 234, 0.4)',
        ],
        borderColor: [
          'rgba(102, 126, 234, 1)',
          'rgba(118, 75, 162, 1)',
          'rgba(102, 126, 234, 1)',
          'rgba(118, 75, 162, 1)',
          'rgba(102, 126, 234, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <section id="analytics" className="analytics-section">
      <h2>Analytical Insights</h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#555' }}>
        Data-driven visualization of my skills, project timeline, and technology focus
      </p>
      <div className="analytics-grid">
        <div className="chart-container">
          <h3>Skills Proficiency</h3>
          <Bar data={skillsData} options={barOptions} />
        </div>
        <div className="chart-container">
          <h3>Project Timeline</h3>
          <Line data={projectTimelineData} options={lineOptions} />
        </div>
        <div className="chart-container">
          <h3>Technology Distribution</h3>
          <Doughnut data={techDistributionData} options={doughnutOptions} />
        </div>
      </div>
    </section>
  );
};

export default Analytics;
