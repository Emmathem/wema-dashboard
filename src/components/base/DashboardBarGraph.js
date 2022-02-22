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
                width: '15px',
                borderWidth: 0,
                borderRadius: '10',
                maxBarThickness: '14',
                data: [300, 609, 700, 900, 1100],
            },
        ],
    };

    return (
        <div className="t-py-4">
            <Bar
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
                        display: false,
                        position: 'right',
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
