import { useEffect } from 'react';
import { formatHour } from '../../utils/dates';
import WeatherIcon from '../WeatherIcon';
import { usePreferencesContext } from '../../context/preferencesContext';

const HourlyItem = ({ hourlyObject }: any) => {
  const date = new Date(hourlyObject.startTime);
  const preferencesCtx = usePreferencesContext();
  let hour: string = date.getHours() + ':00';

  if (preferencesCtx?.preferences.timeFormat === 0) {
    hour = formatHour(date);
  }

  return (
    <div className="m-2 select-none text-slate-900 flex flex-col items-center gap-y-2 first:ml-0 min-w-[40px]">
      <div>{hour}</div>
      <div className="w-7 h-7">
        <WeatherIcon code={hourlyObject.values.weatherCode} time={date.getHours()} />
      </div>
      <div className="relative">
        {Math.round(hourlyObject.values.temperature)}
        <span className="text-sm absolute ">°</span>
      </div>
    </div>
  );
};
export default HourlyItem;
