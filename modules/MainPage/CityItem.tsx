import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FavoriteCity } from '../../types';
import { fetchWeather, codeToWeatherTitle } from '../../utils';
import { useRouter } from 'next/router';
import WeatherIcon from '../../components/WeatherIcon';
import { usePreferencesContext } from '../../context/preferencesContext';
import { useErrorContext } from '../../context/errorContext';
import { motion } from 'framer-motion';

interface PropTypes {
  city: FavoriteCity;
}

export const CityItem = ({ city }: PropTypes) => {
  const preferencesCtx = usePreferencesContext();
  const errCtx = useErrorContext();
  const { isLoading, error, data } = useQuery(
    [
      {
        latitude: city.latitude,
        longitude: city.longitude,
        units: preferencesCtx?.preferences.units,
      },
    ],
    () => fetchWeather(+city.latitude, +city.longitude, preferencesCtx?.preferences.units),
    {
      retry: false,
      staleTime: 300000,
    }
  );

  useEffect(() => {
    if (error) {
      errCtx?.setError(true);
    }
  }, [error, errCtx]);

  const router = useRouter();
  const date = new Date();

  const clickHandler = () => {
    router.push(`/${city?.latitude}/${city?.longitude}`);
  };

  if (isLoading || !data?.hourlyWeather.length) {
    return <></>;
  }

  return (
    <div
      className="flex justify-between hover:scale-[101%] transition-all duration-200 items-center bg-white/50 backdrop-blur-lg rounded-lg p-6 w-full cursor-pointer overflow-hidden"
      onClick={clickHandler}
    >
      <div className="flex flex-col items-start">
        <div className="font-medium text-xl text-slate-800">{city.city}</div>
        <div className="text-3xl font-medium text-slate-800">
          {codeToWeatherTitle(data!.hourlyWeather[0]?.values?.weatherCode)}
        </div>
        <div className="text-8xl font-semibold text-slate-800 relative">
          {Math.round(data!.hourlyWeather[0]?.values?.temperature)}
          <span className="text-5xl font-medium absolute top-0">°</span>
        </div>
      </div>
      <div className="w-24 h-24">
        <WeatherIcon code={data!.hourlyWeather[0]?.values?.weatherCode} time={date.getHours()} />
      </div>
    </div>
  );
};
