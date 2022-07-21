import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import DailyForecast from '../../components/Daily/DailyForecast';
import Details from '../../components/Details/Details';
import Dropdown from '../../components/Dropdown';
import HourlyForecast from '../../components/Hourly/HourlyForecast';
import { coordsToName } from '../../utils/coords';
import useLocalStorage from '../../hooks/useLocalStorage';
import useWeather from '../../hooks/useWeather';
import { codeToWeatherTitle } from '../../utils/weatherCodes';
import { AiTwotoneStar } from 'react-icons/ai';

const Weather: NextPage = () => {
  const { weather1h, weather1d, city, fetchWeather, weatherLoading } = useWeather();
  const router = useRouter();
  const coords = router.query.coords;
  const [favorites, setFavorites] = useLocalStorage('favorites', '[]');

  useEffect(() => {
    if (coords && router.isReady) {
      fetchWeather(+coords[0], +coords[1]);
    }
  }, [router.isReady, coords]);

  if (!weather1h?.length || weatherLoading) {
    return <></>;
  }

  const addToFavorite = () => {};

  return (
    <div className="m-4 md:max-w-3xl md:mx-auto">
      <div className="h-[80vh]">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <div className="text-slate-50 text-lg font-400">{city}</div>
            <div className="text-white/90 text-2xl">
              {codeToWeatherTitle(weather1h[0].values.weatherCode)}
            </div>
            <div
              className="text-9xl text-transparent
      bg-gradient-to-b from-white to-white/60 bg-clip-text font-medium relative"
            >
              {Math.round(weather1h[0]?.values?.temperature)}
              <span className="text-3xl font-medium absolute top-1 text-white/90">°</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Dropdown />
            <div
              onClick={addToFavorite}
              className="ml-2 mt-4 hover:scale-105 transition-all duration-150"
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 49 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-2 stroke-slate-800 fill-transparent"
              >
                <path d="M24.9755 1.08156L29.9741 16.4656C30.1749 17.0836 30.7508 17.502 31.4007 17.502H47.5764C48.0607 17.502 48.2621 18.1218 47.8703 18.4065L34.7839 27.9144C34.2581 28.2963 34.0381 28.9734 34.2389 29.5914L39.2375 44.9754C39.3872 45.4361 38.8599 45.8191 38.4681 45.5344L25.3817 36.0266C24.8559 35.6446 24.1441 35.6446 23.6183 36.0266L10.5319 45.5344C10.1401 45.8191 9.61281 45.4361 9.76249 44.9754L14.7611 29.5914C14.9619 28.9734 14.7419 28.2963 14.2161 27.9144L1.12974 18.4065C0.737879 18.1218 0.939269 17.502 1.42363 17.502H17.5993C18.2492 17.502 18.8251 17.0836 19.0259 16.4656L24.0245 1.08156C24.1741 0.620904 24.8259 0.620906 24.9755 1.08156Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <HourlyForecast weather1h={weather1h} />
      <DailyForecast weather1d={weather1d} />
      <Details details={weather1h[0]} />
    </div>
  );
};
export default Weather;
