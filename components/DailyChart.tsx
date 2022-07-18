import { fail } from 'assert';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export const DailyChart = ({ weather1d }: any) => {
  const minTemps = weather1d.map((day: any) => Math.round(day.values.minTemp * 2) / 2);
  const maxTemps = weather1d.map((day: any) => Math.round(day.values.temperature * 2) / 2);

  const labels = weather1d.map((day: any) => {
    const date = new Date(day.startTime);
    const dayOfMonth = date.getDate();
    return dayOfMonth;
  });
  const canva = useRef();

  useEffect(() => {
    canva?.current.resize(1024, 150);
  }, []);

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      ChartDataLabels,
      datalabels: {
        color: '#353535',
        anchor: 'end',
      },
    },
    display: false,
  };

  const data = {
    labels,
    datasets: [
      {
        data: maxTemps,
        label: 'Max',
        borderColor: 'rgb(250, 240, 150)',
        backgroundColor: 'rgba(255, 231, 16, 0.5)',
      },
      {
        data: minTemps,
        label: 'Min',
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line ref={canva} options={options} data={data} />;
};
export default DailyChart;
