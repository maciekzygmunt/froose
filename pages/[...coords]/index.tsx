import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useWeather from '../../utils/useWeather';

const Weather: NextPage = () => {
  const { weather1h, weather1d, fetchWeather, weatherLoading } = useWeather();

  const router = useRouter();
  const coords = router.query.coords;

  useEffect(() => {
    if (coords) {
      fetchWeather(+coords[0], +coords[1]);
    }
  }, []);

  return <div>test</div>;
};
export default Weather;
