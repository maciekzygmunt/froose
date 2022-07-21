import { useState } from 'react';
import { coordsToName } from '../utils/coords';
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
    //   `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=humidity,precipitationIntensity,temperature,windDirection,windSpeed,pressureSurfaceLevel,weatherCode,weatherCodeFullDay,visibility&timesteps=1h,1d&timezone=${timeZone}&units=metric&apikey=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    // );
    const res = await fetch('http://localhost:3001/data');
    const data = await res.json();

    const hourlyWeather = data.timelines[0].intervals.slice(0, 24);
    const dailyWeather = data.timelines[1].intervals.map((day: any) => {
      const date = day.startTime.slice(0, 10);
      let min = day.values.temperature;
      data.timelines[0].intervals.map((hour: any) => {
        if (hour.startTime.includes(date)) {
          if (hour.values.temperature < min) {
            min = hour.values.temperature;
          }
        }
      });
      day.values.minTemp = min;
      return day;
    });

    setWeather1h(hourlyWeather);
    setWeather1d(dailyWeather);

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
