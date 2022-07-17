import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { coordsToName, nameToCoords } from '../utils/coords';
import { useDates } from '../utils/useDates';
import { useGeoLocation } from '../utils/useGeoLocation';
import useWeather from '../utils/useWeather';
import Loader from '../components/Loader';
import WeatherIcon from '../components/WeatherIcon';

const Home: NextPage = () => {
  const { latitude, longitude } = useGeoLocation();

  return <>test</>;
};

export default Home;
