import ScrollContainer from 'react-indiana-drag-scroll';
import DailyChart from './DailyChart';
import DailyItem from './DailyItem';

const DailyForecast = ({ weather1d }: any) => {
  return (
    <div className="bg-white/50 backdrop-blur-lg rounded-lg p-4 mt-4">
      <div className="text-slate-700 font-medium select-none">Daily forecast</div>
      <ScrollContainer draggingClassName="cursor-grabbing" nativeMobileScroll={true}>
        <div className="flex cursor-grab">
          {weather1d.map((e: any, i: number) => (
            <DailyItem dailyObject={e} key={i} />
          ))}
        </div>
        <div className="cursor-grab">
          <DailyChart weather1d={weather1d} />
        </div>
      </ScrollContainer>
    </div>
  );
};
export default DailyForecast;
