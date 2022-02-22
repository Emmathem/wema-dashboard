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
                lineTension: 0.6,
                data: [27, 50, 23, 59, 39, 40, 25],
                borderColor: '#5F2EEA',
                borderCapStyle: 'butt',
                borderDashOffset: 0.4,
                borderJoinStyle: 'mitter',
                pointRadius: 1,
                pointHoverRadius: 5,
                pointBackgroundColor: '#3773f5',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                type: 'line',
                label: 'USERS',
                lineTension: 0.6,
                data: [25, 20, 26, 37, 50, 90, 50],
                fill: false,
                borderDashOffset: 0.4,
                pointRadius: 1,
                borderCapStyle: 'butt',
                borderJoinStyle: 'mitter',
                borderColor: '#4BDE97',
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
                    title: {
                        display: false,
                    },
                    label: {
                        display: false,
                    },
                    legend: {
                        display: false,
                        position: 'right',
                    },
                    scales: {
                        yAxes: {
                            grid: {
                                drawBorder: false,
                                color: 'rgba(255, 255, 255, 0.1)',
                            },
                            ticks: {
                                beginAtZero: true,
                                color: '#000',
                                fontSize: 12,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'probability',
                            },
                        },
                        xAxes: {
                            grid: {
                                drawBorder: false,
                                color: '#ccc',
                            },
                            ticks: {
                                beginAtZero: true,
                                color: '#000',
                                fontSize: 12,
                            },
                        },
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
