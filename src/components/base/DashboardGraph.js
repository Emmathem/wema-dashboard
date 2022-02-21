import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DashboardGraph = () => {

    const data = {
        labels: [
            'Dec',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun'
        ],
        datasets: [{
            type: 'line',
            label: 'AGENTS',
            lineTension: 0.1,
            data: [25, 30, 35, 39, 40, 50],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)'
        }, {
            type: 'line',
            label: 'USERS',
            lineTension: 0.1,
            data: [10, 20, 30, 35, 40, 50],
            fill: false,
            borderColor: 'rgb(54, 162, 235)'
        }]
    };

    // const data = {
    //     labels: [
    //         'Dec',
    //         'Jan',
    //         'Feb',
    //         'Mar',
    //         'Apr',
    //         'May',
    //         'Jun',
    //     ],
    //     datasets: [
    //         {
    //             fill: false,
    //             lineTension: 0.1,
    //             backgroundColor: '#3773f5',
    //             borderColor: '#3773f5',
    //             borderCapStyle: 'butt',
    //             borderDash: [],
    //             borderDashOffset: 0.0,
    //             borderJoinStyle: 'mitter',
    //             pointBorderColor: '#3773f5',
    //             pointBackgroundColor: '#3773f5',
    //             pointBorderWidth: 1,
    //             pointHoverRadius: 5,
    //             pointHoverBackgroundColor: '#3773f5',
    //             pointHoverBorderColor: '#3773f5',
    //             pointRadius: 1,
    //             pointHitRadius: 10,
    //             data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
    //         },
    //         {
    //             fill: false,
    //             lineTension: 0.1,
    //             backgroundColor: '#3773f5',
    //             borderColor: '#3773f5',
    //             borderCapStyle: 'butt',
    //             borderDash: [],
    //             borderDashOffset: 0.0,
    //             borderJoinStyle: 'mitter',
    //             pointBorderColor: '#3773f5',
    //             pointBackgroundColor: '#3773f5',
    //             pointBorderWidth: 1,
    //             pointHoverRadius: 5,
    //             pointHoverBackgroundColor: '#3773f5',
    //             pointHoverBorderColor: '#3773f5',
    //             pointRadius: 1,
    //             pointHitRadius: 10,
    //             data: [65, 59, 80, 81, 56, 72, 45, 67, 55, 42],
    //         }
    //     ],
    // }

    const options = {
        plugins: {
            legend: {
                display: true,
            }
        }
    }

    return (
        <div>
            <Line data={data} options={options} width={400} />
        </div>
    )
}

export default DashboardGraph