import WeatherIcon from './WeatherIcon';

const HourlyItem = ({ hourlyObject }: any) => {
  const date = new Date(hourlyObject.startTime);

  return (
    <div className="m-2 select-none text-slate-900 flex flex-col items-center">
      <div>{date.getHours()}:00</div>
      {/* <WeatherIcon code={1000} /> */}
      <div className="relative">
        {Math.round(hourlyObject.values.temperature * 2) / 2}
        <span className="text-sm absolute ">°</span>
      </div>
    </div>
  );
};
export default HourlyItem;
