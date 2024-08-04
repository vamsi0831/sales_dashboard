// src/Dashboard.js
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Data for Sales vs Orders line chart
  const lineChartData = {
    labels: ['6/20/2024', '7/5/2024', '7/10/2024', '7/15/2024', '7/20/2024'],
    datasets: [
      {
        label: 'Sales',
        data: [2.5, 2.2, 1.8, 1.5, 1.1],
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        fill: true,
      },
      {
        label: 'Orders',
        data: [1.7, 1.4, 1.2, 0.9, 0.7],
        borderColor: 'lightblue',
        backgroundColor: 'rgba(173, 216, 230, 0.2)',
        fill: true,
      },
    ],
  };

  // Options for the line chart
  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return ` ${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  // Data for the Portion of Sales pie chart
  const pieChartData = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [44.9, 55.1],
        backgroundColor: ['#ff6384', '#36a2eb'],
      },
    ],
  };

  // Options for the pie chart
  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="charts">
        <div className="chart-container">
          <h2>Sales vs Orders</h2>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
        <div className="chart-container">
          <h2>Portion of Sales</h2>
          <Pie data={pieChartData} options={pieChartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
