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
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const DailyChart = ({ weather1d }: any) => {
  const minTemps = weather1d.map((day: any) => Math.round(day.values.minTemp * 2) / 2);
  const maxTemps = weather1d.map((day: any) => Math.round(day.values.temperature * 2) / 2);

  const labels = weather1d.map((day: any) => {
    const date = new Date(day.startTime);
    const dayOfMonth = date.getDate();
    return dayOfMonth;
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    tension: 0.2,
    display: false,
    // maintainAspectRatio: false,
    width: '128px',
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

  return <Line options={options} data={data} />;
};
export default DailyChart;
