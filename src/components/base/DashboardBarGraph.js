import React from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';

const DashboardBarGraph = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: '',
                backgroundColor: 'rgb(255,255,255)',
                color: '#fff',
                width: '10px',
                borderWidth: 0,
                borderRadius: '10',
                maxBarThickness: '12',
                data: [900, 600, 400, 1100, 800],
            },
        ],
    };

    return (
        <div className="t-py-4">
            <Bar
                data={data}
                options={{
                    // maintainAspectRatio: false,
                    scales: {
                        yAxes: {
                            grid: {
                                drawBorder: false,
                                color: 'rgba(255, 255, 255, 0.1)',
                            },
                            ticks: {
                                beginAtZero: true,
                                color: 'white',
                                fontSize: 12,
                            },
                        },
                        xAxes: {
                            grid: {
                                drawBorder: false,
                                color: 'rgba(255, 255, 255, 0.1)',
                            },
                            ticks: {
                                beginAtZero: true,
                                color: 'white',
                                fontSize: 12,
                            },
                        },
                    },
                    aspectRatio: 1,
                }}
                width={400}
                type="bar"
            />
        </div>
    );
};

export default DashboardBarGraph;
