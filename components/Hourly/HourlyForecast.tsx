import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import HourlyItem from './HourlyItem';

const HourlyForecast = ({ weather1h }: any) => {
  const hourly = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(hourly.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 });
  }, []);

  if (weather1h?.length === 0) {
    return <></>;
  }

  return (
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
  );
};
export default HourlyForecast;
