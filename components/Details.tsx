import HourlyItem from './HourlyItem';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import DailyItem from './DailyItem';
import DailyChart from './DailyChart';
import Arrow from '../icons/arrow.svg';

const Details = ({ details }: any) => {
  const rotateDeg = Math.round(details.values.windDirection);
  console.log(rotateDeg);
  //TODO: arrow rotation and grid

  return (
    <div className="bg-white/50 backdrop-blur-lg rounded-lg p-4 mt-4 select-none">
      <div className="text-slate-700 font-medium select-none">Details</div>
      <div className="grid grid-cols-1 xssmall:grid-cols-2  supasmall:grid-cols-3 small:grid-cols-4 sm:grid-cols-5 gap-y-2 mt-2 text-center">
        <div>
          <div className="text-sm text-slate-700">Precipitation</div>
          <div className="text-slate-900 ">{details.values.precipitationIntensity} mm</div>
        </div>
        <div>
          <div className="text-sm text-slate-700">Humidity</div>
          <div className="text-slate-900 ">{details.values.humidity} %</div>
        </div>
        <div>
          <div className="text-sm text-slate-700">Pressure</div>
          <div className="text-slate-900 ">
            {Math.round(details.values.pressureSurfaceLevel)} hPa
          </div>
        </div>
        <div>
          <div className="text-sm text-slate-700">Visibility</div>
          <div className="text-slate-900 ">{Math.round(details.values.visibility)} km</div>
        </div>
        <div>
          <div className="text-sm text-slate-700">Wind</div>
          <div className="text-slate-900 flex justify-center items-center">
            <Arrow className="h-3 mr-1 rotate-[69deg]" />
            {details.values.windSpeed} m/s
          </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
