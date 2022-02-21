import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DashboardBarGraph = () => {

  const data = {
    labels: [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgb(255,255,255)',
        color: '#fff',
        borderWidth: 0,
        borderRadius: '2px',
        data: [300, 609, 700, 900, 1100]
      }
    ]
  };

   const options = {
        plugins: {
            legend: {
                display: true,
            }
        }
    }

  return (
    <div className='t-py-4'>
      <Bar data={data} options={{
        // title: {
        //   display: true,
        //   text: 'Average Rainfall per month',
        //   fontSize: 20,
        //   color: '#fff',
        // },
        legend: {
          display: true,
          position: 'right'
        },
        aspectRatio: 1
      }} width={400} />
    </div>
  )
}

export default DashboardBarGraph