import ScrollContainer from 'react-indiana-drag-scroll';
import HourlyItem from './HourlyItem';

export const HourlyForecast = ({ weather1h }: any) => {
  if (weather1h?.length === 0) {
    return <></>;
  }

  return (
    <div className="bg-white/50 backdrop-blur-lg rounded-lg p-4">
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
