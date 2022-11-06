import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { DailyForecast } from '../../modules/Daily';
import { Details } from '../../modules/Details';
import Dropdown from '../../components/Dropdown';
import { HourlyForecast } from '../../modules/Hourly';
import { fetchWeather, codeToWeatherTitle, getTodayDate } from '../../utils';
import FavoriteStar from '../../components/FavoriteStar';
import { usePreferencesContext } from '../../context/preferencesContext';
import Loader from '../../components/UI/Loader';
import ErrorMessage from '../../components/UI/ErrorMessage';
import WeatherIcon from '../../components/WeatherIcon';

const Weather: NextPage = () => {
  const router = useRouter();
  const preferencesCtx = usePreferencesContext();
  const coords = router.query.coords || 'wait';
  const date = new Date();

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
        <meta property="og:title" content={`Froose - ${data.name}`} />
        <meta
          name="og:description"
          content={`Use Froose to check the weather for next 14 days in ${data.name}, make a list of your favorites places and never be surprised by the weather.`}
        />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="m-4 md:max-w-3xl md:mx-auto"
      >
        <div className="mb-6">
          <div className="flex justify-between items-start drop-shadow-md">
            <div className="text-4xl text-white font-medium truncate">{data.name}</div>
            <div className="flex flex-col items-center">
              <Dropdown />
              <FavoriteStar city={data.name} />
            </div>
          </div>
          <div className="flex flex-col items-center relative -top-8  -z-10">
            <div className="w-72 mb-12 drop-shadow-md">
              <WeatherIcon
                code={data?.hourlyWeather[0].values.weatherCode}
                time={date.getHours()}
                big={true}
              />
            </div>
            <div className="flex flex-col items-center drop-shadow-md">
              <div className="relative text-[10rem] leading-none text-white font-medium">
                {Math.round(data?.hourlyWeather[0]?.values?.temperature)}
                <span className="absolute text-4xl top-2">°</span>
              </div>
              <div className="text-white text-3xl font-medium">
                {codeToWeatherTitle(data?.hourlyWeather[0].values.weatherCode)}
              </div>
              <p className="text-slate-100 font-normal text-lg">{getTodayDate()}</p>
            </div>
          </div>
        </div>
        <HourlyForecast weather1h={data?.hourlyWeather} />
        <DailyForecast weather1d={data?.dailyWeather} />
        <Details
          details={data?.hourlyWeather[0]}
          backupPressure={data?.hourlyWeather[1].values.pressureSurfaceLevel}
        />
      </motion.div>
    </>
  );
};
export default Weather;
