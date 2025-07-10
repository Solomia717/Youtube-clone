import React, { useEffect, useState } from 'react';
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

interface StatusLineChartProps {
    date: Date
}

const StatusLineChart: React.FC<StatusLineChartProps> = ({ date }) => {
    const [dataValues, setDataValues] = useState<number[]>([
        11000, 11500, 11800, 13000, 14000,
        13100, 11000, 10000, 8000, 7000,
        6700, 5000, 8000, 6000, 7500,
        8000, 8100, 8300, 8000, 7900,
        7900, 8500, 8700, 8600, 8500,
        8000, 7500, 8000
    ]);
    const [labels, setLabels] = useState<string[]>([
        "Jun 13, 2025", "Jun 14, 2025",
        "Jun 15, 2025", "Jun 16, 2025",
        "Jun 17, 2025", "Jun 18, 2025",
        "Jun 19, 2025", "Jun 20, 2025",
        "Jun 21, 2025", "Jun 22, 2025",
        "Jun 23, 2025", "Jun 24, 2025",
        "Jun 25, 2025", "Jun 26, 2025",
        "Jun 27, 2025", "Jun 28, 2025",
        "Jun 29, 2025", "Jun 30, 2025",
        "Jul 1, 2025",
        "Jul 2, 2025",
        "Jul 3, 2025",
        "Jul 4, 2025",
        "Jul 5, 2025",
        "Jul 6, 2025",
        "Jul 7, 2025",
        "Jul 8, 2025",
        "Jul 9, 2025",
        "Jul 10, 2025"
    ]);

    const [options, setOptions] = useState<ChartOptions<'line'>>({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        layout: {
            padding: {
                bottom: -5 // additional pull-up of labels (use with caution)
            }
        },
        scales: {
            x: {
                offset: false,
                ticks: {
                    color: '#AAAAAA',
                    callback: function (value, index, ticks) {
                        console.log(index)
                        const self = this as any;
                        if (index % 9 !== 0 && index % 9 !== 5) return '';

                        const rawLabel = self.getLabelForValue(value);
                        const label = typeof rawLabel === 'string' ? rawLabel : String(rawLabel);

                        if (index === 0) return '                   ' + label;
                        if (index === ticks.length - 1) return label.slice(0, 8) + '...                ';

                        return label;
                    },
                    maxRotation: 0,
                    minRotation: 0,
                    autoSkip: false
                },
                grid: {
                    display: false
                },
                position: 'bottom'
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
                    color: (context) => {
                        return context.tick.value === 0 ? 'rgb(200, 200, 200)' : 'rgba(200, 200, 200, 0.1)';
                    },
                    lineWidth: 1
                }
            }
        }
    });

    useEffect(() => {
        if (!date) return;

        const generateLast28Days = (endDate: Date | string): string[] => {
            const dateObj = new Date(endDate);
            const formatter = new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });

            return Array.from({ length: 28 }, (_, i) => {
                const d = new Date(dateObj);
                d.setDate(d.getDate() - (27 - i));
                return formatter.format(d);
            });
        };

        const newLabels = generateLast28Days(date);
        setLabels(newLabels);
    }, [date]);

    const data: ChartData<'line'> = {
        labels,
        datasets: [
            {
                label: 'Views',
                data: dataValues.slice(-labels.length), // align data length with labels length
                fill: true,
                borderColor: '#41B4D9',
                backgroundColor: 'rgba(49, 60, 66, 0.8)',
                tension: 0,
                pointRadius: 0,
                borderWidth: 2,
                clip: false
            }
        ]
    };

    return (
        <div className='relative h-[160px] ml-[-42px] p-0 pr-6'>
            <Line data={data} options={options} />
            <div className="absolute top-0 right-[24px] w-[69px] h-full bg-[#282828] pointer-events-none z-10" />
            <div className="absolute right-[44px] top-[14px] flex flex-col z-10 text-[12px] text-[#AAAAAA] font-roboto text-xs space-y-[22px]">
                <span>15.0K</span>
                <span>10.0K</span>
                <span>5.0K</span>
                <span>0</span>
            </div>
        </div>
    );
};

export default StatusLineChart;
