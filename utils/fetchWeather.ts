import { coordsToName } from './coords';
import { getTimeZone } from './timeZone';

export const fetchWeather = async (
  latitude: number | null,
  longitude: number | null,
  units: string | undefined
) => {
  const { timeZone } = getTimeZone();
  const devMode = process.env.NEXT_PUBLIC_DEV_MODE;

  if (devMode === 'true') {
    const res = await fetch('http://localhost:3001/data');
    const data = await res.json();

    const dailyIndex = data.timelines[0].timestep === '1d' ? 0 : 1;
    const hourlyIndex = dailyIndex === 1 ? 0 : 1;

    const hourlyWeather = data.timelines[hourlyIndex].intervals.slice(0, 24);
    const dailyWeather = data.timelines[dailyIndex].intervals.map((day: any) => {
      const date = day.startTime.slice(0, 10);
      let min = day.values.temperature;
      data.timelines[hourlyIndex].intervals.map((hour: any) => {
        if (hour.startTime.includes(date)) {
          if (hour.values.temperature < min) {
            min = hour.values.temperature;
          }
        }
      });
      day.values.minTemp = min;
      return day;
    });
    const name = await coordsToName(latitude, longitude);
    return {
      hourlyWeather,
      dailyWeather,
      name,
    };
  } else {
    const res = await fetch(
      `https://api.tomorrow.io/v4/timelines?location=${latitude},${longitude}&fields=humidity,precipitationIntensity,temperature,windDirection,windSpeed,pressureSurfaceLevel,weatherCode,weatherCodeFullDay,visibility&timesteps=1h,1d&timezone=${timeZone}&units=${units}&apikey=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
    );
    const data = await res.json();

    const dailyIndex = data.data.timelines[0].timestep === '1d' ? 0 : 1;
    const hourlyIndex = dailyIndex === 1 ? 0 : 1;

    const hourlyWeather = data.data.timelines[hourlyIndex].intervals.slice(0, 24);
    const dailyWeather = data.data.timelines[dailyIndex].intervals.map((day: any) => {
      const date = day.startTime.slice(0, 10);
      let min = day.values.temperature;
      data.data.timelines[hourlyIndex].intervals.map((hour: any) => {
        if (hour.startTime.includes(date)) {
          if (hour.values.temperature < min) {
            min = hour.values.temperature;
          }
        }
      });
      day.values.minTemp = min;
      return day;
    });
    const name = await coordsToName(latitude, longitude);

    return {
      hourlyWeather,
      dailyWeather,
      name,
    };
  }
};
