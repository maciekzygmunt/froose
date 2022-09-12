import { numberToWeekDay, isToday, numberToMonth } from '../../utils/dates';
import { codeToWeatherTitle } from '../../utils/weatherCodes';
import Marquee from 'react-easy-marquee';

const DailyItem = ({ dailyObject }: any) => {
  const date = new Date(dailyObject.startTime);
  const day = date.getDate();
  const month = numberToMonth(date.getMonth());
  const weekDay = numberToWeekDay(date.getDay());

  const title = codeToWeatherTitle(dailyObject.values.weatherCodeFullDay);

  return (
    <div className="m-2 select-none text-slate-900 flex flex-col items-center gap-y-2 first:ml-0 max-w-[60px]">
      <div>{isToday(date) ? 'Today' : weekDay}</div>
      <div className="whitespace-nowrap">
        {day} {month}
      </div>
      <div className="w-[60px] overflow-hidden whitespace-nowrap text-center">
        {title.length > 6 ? (
          <Marquee duration={10000} width="60px" height="1.5rem" reverse>
            {title}
            <> &nbsp; &nbsp; &nbsp;</>
          </Marquee>
        ) : (
          `${title}`
        )}
      </div>
    </div>
  );
};
export default DailyItem;
