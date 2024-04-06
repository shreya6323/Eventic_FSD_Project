// import React from 'react';
// import Chart from 'chart.js/auto';

// const PieChart = ({ happyPercentage, sadPercentage }) => {
//   const chartRef = React.createRef();

//   React.useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');

//     new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: ['Happy', 'Sad'],
//         datasets: [{
//           label: 'Feedback Analysis',
//           data: [happyPercentage, sadPercentage],
//           backgroundColor: ['green', 'red'],
//         }]
//       },
//       options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'bottom',
//           },
//         },
//       },
//     });
//   }, [chartRef, happyPercentage, sadPercentage]);

//   return <canvas ref={chartRef} />;
// };

// export default PieChart;
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ happyPercentage, sadPercentage,neutralPercentage }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous chart instance
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Happy', 'Sad','Neutral'],
        datasets: [{
          label: 'Feedback Analysis',
          data: [happyPercentage, sadPercentage,neutralPercentage],
          backgroundColor: ['green', 'red','blue'],
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });

    return () => {
      // Cleanup function to destroy chart instance when component unmounts
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [happyPercentage, sadPercentage,neutralPercentage]);

  return <canvas ref={chartRef} />;
};

export default PieChart;
