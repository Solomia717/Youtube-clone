import React from 'react';

interface MiniBarChartProps {
    data: number[]; // Expecting ~48 points
    barColor?: string;
}

const MiniBarChart: React.FC<MiniBarChartProps> = ({ data, barColor = '#00BFFF' }) => {
    const max = Math.max(...data);

    return (
        <div className="flex items-end h-9 px-1 gap-[1px]">
            {data.map((value, index) => {
                const height = (value / max) * 100;
                return (
                    <div
                        key={index}
                        className="flex-1 rounded-t"
                        style={{
                            height: `${height}%`,
                            backgroundColor: barColor,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default MiniBarChart;
