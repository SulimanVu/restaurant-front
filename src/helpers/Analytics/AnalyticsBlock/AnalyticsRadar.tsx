import React from 'react';
import { Radar } from 'react-chartjs-2';

interface RadarChartExampleProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
      fill: boolean;
    }[];
  };
}

const AnalyticsRadar: React.FC<RadarChartExampleProps> = ({ data }) => {
  return <Radar data={data} />;
};

export default AnalyticsRadar;