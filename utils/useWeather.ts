import { useState } from 'react';
import { coordsToName } from './coords';
import { useDates } from './useDates';

const useWeather = () => {
  const { timeZone } = useDates();
  const [loading, setLoading] = useState(false);
  const [weather1h, setWeather1h] = useState<any>([]);
  const [weather1d, setWeather1d] = useState<any>([]);
  const [city, setCity] = useState<string>('');

  const fetchWeather = async (latitude: number | null, longitude: number | null) => {
    setLoading(true);
    // const res = await fetch(
    //   `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=humidity,precipitationIntensity,temperature,windDirection,windSpeed,pressureSurfaceLevel,weatherCode,visibility&timesteps=1h,1d&timezone=${timeZone}&units=metric&apikey=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    const res = await fetch('http://localhost:3001/data');
    const data = await res.json();

    setWeather1h(data.timelines[0].intervals.slice(0, 24));
    setWeather1d(data.timelines[1].intervals);

    const name = await coordsToName(latitude, longitude);
    setCity(name);

    setLoading(false);
  };

  return {
    weather1h,
    weather1d,
    city,
    fetchWeather,
    weatherLoading: loading,
  };
};

export default useWeather;
