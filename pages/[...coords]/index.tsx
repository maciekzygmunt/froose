import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { DailyForecast } from '../../modules/Daily';
import { Details } from '../../modules/Details';
import Dropdown from '../../components/Dropdown';
import { HourlyForecast } from '../../modules/Hourly';
import { fetchWeather, codeToWeatherTitle } from '../../utils';
import FavoriteStar from '../../components/FavoriteStar';
import { usePreferencesContext } from '../../context/preferencesContext';
import Loader from '../../components/UI/Loader';
import ErrorMessage from '../../components/UI/ErrorMessage';

const Weather: NextPage = () => {
  const router = useRouter();
  const preferencesCtx = usePreferencesContext();
  const coords = router.query.coords || 'wait';

  const { isLoading, data, isError } = useQuery(
    [{ latitude: +coords![0], longitude: +coords![1], units: preferencesCtx?.preferences.units }],
    () => fetchWeather(+coords![0], +coords![1], preferencesCtx?.preferences.units),
    {
      enabled: router.isReady && (!isNaN(+coords![0]) || !isNaN(+coords![1])),
      retry: 0,
      staleTime: 300000,
    }
  );

  if (router.isReady && (isNaN(+coords![0]) || isNaN(+coords![1]))) {
    router.replace('/');
  }

  if (isLoading) {
    return (
      <div className="w-full flex justify-center mt-60">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-72">
        <ErrorMessage />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data.name} | Froose</title>
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="m-4 md:max-w-3xl md:mx-auto"
      >
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
      </motion.div>
    </>
  );
};
export default Weather;
