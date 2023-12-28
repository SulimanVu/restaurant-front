import React from 'react';
import { Bar } from 'react-chartjs-2';

interface BarChartProps {
    data: {
        labels: string[];
        datasets: {
            data: number[];
            backgroundColor: string[];
        }[];
    };
}

const AnalyticsRaw: React.FC<BarChartProps> = ({ data }) => {
    return <Bar data={data} />;
};

export default AnalyticsRaw;