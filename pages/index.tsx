import type { NextPage } from 'next';
import { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { coordsToName, nameToCoords } from '../utils/coords';
import { useDates } from '../utils/useDates';
import { useGeoLocation } from '../utils/useGeoLocation';
import useWeather from '../utils/useWeather';

const Home: NextPage = () => {
  const { latitude, longitude } = useGeoLocation();
  console.log(latitude);
  useEffect(() => {});

  return <div className=""></div>;
};

export default Home;
