import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import DailyForecast from '../../components/Daily/DailyForecast';
import Details from '../../components/Details/Details';
import Dropdown from '../../components/Dropdown';
import HourlyForecast from '../../components/Hourly/HourlyForecast';
import { fetchWeather } from '../../utils/fetchWeather';
import { codeToWeatherTitle } from '../../utils/weatherCodes';
import FavoriteStar from '../../components/FavoriteStar';
import { coordsToName, nameToCoords } from '../../utils/coords';
import { usePreferencesContext } from '../../context/preferencesContext';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';

const Weather: NextPage = () => {
  const router = useRouter();
  const preferencesCtx = usePreferencesContext();
  const coords = router.query.coords || 'wait';

  const { isLoading, isError, data, error, refetch } = useQuery(
    [{ latitude: +coords![0], longitude: +coords![1], units: preferencesCtx?.preferences.units }],
    () => fetchWeather(+coords![0], +coords![1], preferencesCtx?.preferences.units),
    {
      enabled: router.isReady,
      retry: 3,
      staleTime: 300000,
    }
  );

  if (!data?.hourlyWeather?.length || isLoading) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>{data.name} | Froose</title>
      </Head>
      <div className="m-4 md:max-w-3xl md:mx-auto">
        <div className="h-[80vh]">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <div className="text-slate-50 text-lg font-400">{data.name}</div>
              <div className="text-white/90 text-2xl">
                {codeToWeatherTitle(data?.hourlyWeather[0].values.weatherCode)}
              </div>
              <div
                className="text-9xl text-transparent
      bg-gradient-to-b from-white to-white/60 bg-clip-text font-medium relative"
              >
                {Math.round(data?.hourlyWeather[0]?.values?.temperature)}
                <span className="text-3xl font-medium absolute top-1 text-white/90">°</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Dropdown />
              <FavoriteStar city={data.name} />
            </div>
          </div>
        </div>
        <HourlyForecast weather1h={data?.hourlyWeather} />
        <DailyForecast weather1d={data?.dailyWeather} />
        <Details details={data?.hourlyWeather[0]} />
      </div>
    </>
  );
};
export default Weather;
