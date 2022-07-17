import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Details from '../../components/Details';
import { coordsToName } from '../../utils/coords';
import useWeather from '../../utils/useWeather';

const Weather: NextPage = () => {
  const { weather1h, weather1d, city, fetchWeather, weatherLoading } = useWeather();
  const router = useRouter();
  const coords = router.query.coords;

  useEffect(() => {
    if (coords && router.isReady) {
      fetchWeather(+coords[0], +coords[1]);
    }
  }, [router.isReady, coords]);

  if (!weather1h?.length || weatherLoading) {
    return <></>;
  }

  return (
    <div className="m-4 md:max-w-3xl md:mx-auto">
      <div className="h-[80vh]">
        <div className="text-slate-50 text-lg font-400">{city}</div>
        <div className="text-white/90 text-2xl">Partly cloudy</div>
        <div
          className="text-9xl text-transparent
      bg-gradient-to-b from-white to-white/60 bg-clip-text font-medium relative"
        >
          {Math.round(weather1h[0]?.values?.temperature * 2) / 2}
          <span className="text-3xl font-medium absolute top-1 text-white/90">°</span>
        </div>
      </div>
      <Details weather1h={weather1h} weather1d={weather1d} />
    </div>
  );
};
export default Weather;
