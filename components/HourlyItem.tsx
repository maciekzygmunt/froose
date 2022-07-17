import Image from 'next/image';
import WeatherIcon from './WeatherIcon';

const HourlyItem = ({ hourlyObject }: any) => {
  const date = new Date(hourlyObject.startTime);
  const hour = date.getHours();
  // hourlyObject.values.weatherCode
  return (
    <div className="m-2 select-none text-slate-900 flex flex-col items-center gap-y-2 first:ml-0">
      <div>{hour}:00</div>
      <WeatherIcon code={8000} time={hour} />
      <div className="relative">
        {Math.round(hourlyObject.values.temperature * 2) / 2}
        <span className="text-sm absolute ">°</span>
      </div>
    </div>
  );
};
export default HourlyItem;
