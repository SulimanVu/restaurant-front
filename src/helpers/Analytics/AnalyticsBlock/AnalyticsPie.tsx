import React from 'react';
import { Pie } from 'react-chartjs-2';

interface BarChartProps {
    data: {
        labels: string[];
        datasets: {
            data: number[];
            backgroundColor: string[];
        }[];
    };
}

const AnalyticsPie: React.FC<BarChartProps> = ({ data }) => {
    return <Pie data={data} />;
};

export default AnalyticsPie;