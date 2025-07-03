import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const labels = [
    'Jun 1, 2025', 'Jun 2, 2025', 'Jun 3, 2025', 'Jun 4, 2025',
    'Jun 5, 2025', 'Jun 6, 2025', 'Jun 7, 2025', 'Jun 8, 2025',
    'Jun 9, 2025', 'Jun 10, 2025', 'Jun 11, 2025', 'Jun 12, 2025',
    'Jun 13, 2025', 'Jun 14, 2025', 'Jun 15, 2025', 'Jun 16, 2025',
    'Jun 17, 2025', 'Jun 18, 2025', 'Jun 19, 2025', 'Jun 20, 2025',
    'Jun 21, 2025', 'Jun 22, 2025', 'Jun 23, 2025', 'Jun 24, 2025',
    'Jun 25, 2025', 'Jun 26, 2025', 'Jun 27, 2025', 'Jun 28, 2025',
    'Jun 29, 2025', 'Jun 30, 2025', 'Jul 1, 2025'
];

const dataValues = [
    11000, 11500, 11800, 12000, 12300,
    11500, 11000, 10000, 8000, 7000,
    6700, 5900, 7000, 7300, 7500,
    8000, 8100, 8300, 8000, 7900,
    7900, 8500, 8700, 8600, 8500,
    8000, 7800, 8000, 8100, 8250,
    8400
];

const data: ChartData<'line'> = {
    labels,
    datasets: [
        {
            label: 'Views',
            data: dataValues,
            fill: true,
            borderColor: '#00BFFF',
            backgroundColor: 'rgba(0, 191, 255, 0.1)',
            tension: 0.4,
            pointRadius: 0,
        }
    ]
};

const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        x: {
            offset: false,
            ticks: {
                color: '#ccc',
                callback: function (value, index, ticks) {
                    if (index % 5 !== 0) return '';

                    const label = this.getLabelForValue(value);

                    if (index === 0) {
                        // First label: add leading spaces
                        return '                ' + label;
                    } else if (index === ticks.length - 1) {
                        // Last label: add trailing spaces
                        return label + '                ';
                    }

                    return label;
                },
                maxRotation: 0,
                minRotation: 0,
                autoSkip: false
            },
            grid: {
                display: false
            }
        },
        y: {
            position: 'right',
            min: 0,
            max: 15000,
            ticks: {
                stepSize: 5000,
                color: '#ccc',
                padding: 15,
                callback: (value) => {
                    if (value === 0) return '0';
                    return `${(Number(value) / 1000).toFixed(1)}K`;
                }
            },
            grid: {
                display: true,
                color: 'rgba(200, 200, 200, 0.2)',
                lineWidth: (context) => {
                    // Make the line at y=0 thicker
                    return context.tick.value === 0 ? 4 : 1;
                }
            }
        }
    }
};

const StatusLineChart: React.FC = () => {
    return (
        <div style={{ height: '174px', padding: '1rem 0', marginLeft: '-25px' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default StatusLineChart;
