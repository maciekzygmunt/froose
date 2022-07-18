import HourlyItem from './HourlyItem';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import DailyItem from './DailyItem';
import DailyChart from './DailyChart';

interface DetailsProps {
  weather1h: any;
  weather1d: any;
}

const Details = ({ weather1h, weather1d }: DetailsProps) => {
  const hourly = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(hourly.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });
  }, []);

  if (weather1h?.length === 0) {
    return <></>;
  }

  return (
    <>
      <div ref={hourly} className="bg-white/50 backdrop-blur-lg rounded-lg p-4">
        <div className="text-slate-700 font-medium select-none">Hourly forecast</div>
        <ScrollContainer
          className="flex cursor-grab"
          draggingClassName="cursor-grabbing"
          nativeMobileScroll={true}
        >
          {weather1h.map((e: any, i: number) => (
            <HourlyItem key={i} hourlyObject={e} />
          ))}
        </ScrollContainer>
      </div>
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
    </>
  );
};
export default Details;
