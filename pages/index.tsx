import type { NextPage } from 'next';
import { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { useLocation } from '../utils/useLocation';

const Home: NextPage = () => {
  const { latitude, longitude } = useLocation();
  console.log(latitude, longitude);

  const fetchWeather = async () => {
    // const res = await fetch(
    //   `https://api.tomorrow.io/v4/timelines?location=49.4920,19.0248&fields=humidity,precipitationIntensity,temperature,windDirection,windSpeed,pressureSurfaceLevel,weatherCode,visibility&timesteps=1h&startTime=${startTime}&endTime=${endTime}&timezone=${timeZone}&units=metric&apikey=${process.env.WEATHER_KEY}`
    // );
    // const data = await res.json();
    // console.log(data);
    // ,weatherCodeFullDay not allowed for 1h
  };

  // useEffect(() => {
  // fetchWeather();
  // });

  return (
    <div className="">
      <SearchBar />
    </div>
  );
};

export default Home;
