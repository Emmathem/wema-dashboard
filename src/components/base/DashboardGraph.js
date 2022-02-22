import React from 'react';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';

const DashboardGraph = () => {
    const data = {
        labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                type: 'line',
                label: 'AGENTS',
                lineTension: 0.1,
                data: [15, 30, 36, 49, 60, 70, 100],
                borderColor: 'rgb(255, 99, 132)',
                borderCapStyle: 'butt',
                borderDashOffset: 0.0,
                borderJoinStyle: 'mitter',
                pointRadius: 1,
                pointHoverRadius: 5,
                pointBackgroundColor: '#3773f5',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                type: 'line',
                label: 'USERS',
                lineTension: 0.1,
                data: [10, 23, 30, 37, 50, 90, 100],
                fill: false,
                borderDashOffset: 0.0,
                pointRadius: 1,
                borderCapStyle: 'butt',
                borderJoinStyle: 'mitter',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: '#3773f5',
                pointHoverRadius: 5,
            },
        ],
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

    return (
        <div className="t-py-4 t-px-4">
            <Line
                data={data}
                options={{
                    // title: {
                    //   display: true,
                    //   text: 'Average Rainfall per month',
                    //   fontSize: 20,
                    //   color: '#fff',
                    // },
                    label: {
                        display: false,
                    },
                    legend: {
                        display: true,
                        position: 'right',
                    },
                    // aspectRatio: 1,
                }}
                width={400}
                type="line"
            />
        </div>
    );
};

export default DashboardGraph;
