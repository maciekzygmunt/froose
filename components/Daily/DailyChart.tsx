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
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';

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
  const minTemps = weather1d.map((day: any) => Math.round(day.values.minTemp));
  const maxTemps = weather1d.map((day: any) => Math.round(day.values.temperature));

  const labels = weather1d.map((day: any) => {
    const date = new Date(day.startTime);
    const dayOfMonth = date.getDate();
    return dayOfMonth;
  });
  const canva = useRef();

  useEffect(() => {
    canva.current.resize(1110, 150);
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
        color: '#334155',
        font: {
          size: 16,
          weight: 400,
          family: 'Poppins',
        },
        formatter: function (value: string, context: Context) {
          return value + '°';
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      xAxis: {
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 16,
        right: 16,
        top: 20,
        bottom: 22,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: maxTemps,
        label: 'Max',
        borderColor: 'rgb(250, 240, 150)',
        backgroundColor: 'rgba(255, 231, 16, 0.5)',
        datalabels: {
          anchor: 'end',
          align: 290,
          offset: -6,
        },
      },
      {
        data: minTemps,
        label: 'Min',
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        datalabels: {
          anchor: 'start',
          align: 78,
          offset: 0,
        },
      },
    ],
  };

  return <Line className="ml-3 pointer-events-none" ref={canva} options={options} data={data} />;
};
export default DailyChart;
