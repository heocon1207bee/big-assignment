import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['2021', '2022', '2023', '2024'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Amount',
      data: labels.map(() => {return }),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function Chart() {
  return <Bar options={options} data={data} />;
}
