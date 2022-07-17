import { numberToWeekDay, isToday, numberToMonth } from '../utils/dates';
import WeatherTitle from './WeatherTitle';

const DailyItem = ({ dailyObject }: any) => {
  const date = new Date(dailyObject.startTime);
  const month = numberToMonth(date.getMonth());
  const weekDay = numberToWeekDay(date.getDay());
  const day = date.getDate();

  return (
    <div className="m-2 select-none text-slate-900 flex flex-col items-center gap-y-2 first:ml-0 max-w-[60px]">
      <div>{isToday(date) ? 'Today' : weekDay}</div>
      <div className="whitespace-nowrap">
        {day} {month}
      </div>
      <div className="whitespace-nowrap overflow-hidden max-w-[60px]">
        <WeatherTitle code={dailyObject.values.weatherCodeFullDay} />
      </div>
    </div>
  );
};
export default DailyItem;
