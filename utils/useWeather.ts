import { useState } from 'react';
import { useDates } from './useDates';

const useWeather = () => {
  const { timeZone } = useDates();
  const [loading, setLoading] = useState(false);
  const [weather1h, setWeather1h] = useState<object[]>([]);
  const [weather1d, setWeather1d] = useState<object[]>([]);

  const fetchWeather = async (latitude: number | null, longitude: number | null) => {
    setLoading(true);
    const res = await fetch(
      `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=humidity,precipitationIntensity,temperature,windDirection,windSpeed,pressureSurfaceLevel,weatherCode,visibility&timesteps=1h,1d&timezone=${timeZone}&units=metric&apikey=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    );
    const data = await res.json();
    setWeather1h(data.data?.timelines[0].intervals);
    setWeather1d(data.data?.timelines[1].intervals);
    setLoading(false);
  };

  return {
    weather1h,
    weather1d,
    fetchWeather,
    weatherLoading: loading,
  };
};

export default useWeather;
