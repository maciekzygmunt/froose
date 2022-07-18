import { numberToWeekDay, isToday, numberToMonth } from '../utils/dates';
import { codeToWeatherTitle } from '../utils/weatherCodes';
import Marquee from 'react-fast-marquee';

const DailyItem = ({ dailyObject }: any) => {
  const date = new Date(dailyObject.startTime);
  const day = date.getDate();
  const month = numberToMonth(date.getMonth());
  const weekDay = numberToWeekDay(date.getDay());

  //TODO: text sliding
  return (
    <div className="m-2 select-none text-slate-900 flex flex-col items-center gap-y-2 first:ml-0 max-w-[60px]">
      <div>{isToday(date) ? 'Today' : weekDay}</div>
      <div className="whitespace-nowrap">
        {day} {month}
      </div>
      <div className="w-[60px] overflow-hidden whitespace-nowrap text-center">
        {codeToWeatherTitle(dailyObject.values.weatherCodeFullDay)}
      </div>
    </div>
  );
};
export default DailyItem;
