import Image from 'next/image';
import { useEffect } from 'react';
import { formatHour } from '../utils/dates';
import useLocalStorage from '../utils/useLocalStorage';
import WeatherIcon from './WeatherIcon';

const HourlyItem = ({ hourlyObject }: any) => {
  const date = new Date(hourlyObject.startTime);
  const [timeFormat, setTimeFormat] = useLocalStorage('timeFormat', 1);
  let hour: string = date.getHours() + ':00';

  if (timeFormat === 0) {
    hour = formatHour(date);
  }

  return (
    <div className="m-2 select-none text-slate-900 flex flex-col items-center gap-y-2 first:ml-0">
      <div>{hour}</div>
      <WeatherIcon code={hourlyObject.values.weatherCode} time={date.getHours()} />
      <div className="relative">
        {Math.round(hourlyObject.values.temperature)}
        <span className="text-sm absolute ">°</span>
      </div>
    </div>
  );
};
export default HourlyItem;
