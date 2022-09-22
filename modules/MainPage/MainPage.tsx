import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useIsFetching } from '@tanstack/react-query';
import Logo from '../../components/UI/Logo';
import { CityItem } from './';
import { useFavoritesContext } from '../../context/favoritesContext';
import { FavoriteCity } from '../../types';
import Loader from '../../components/UI/Loader';
import { useErrorContext } from '../../context/errorContext';
import ErrorMessage from '../../components/UI/ErrorMessage';

const MainPage = () => {
  const isFetching = useIsFetching();
  const favCtx = useFavoritesContext();
  const errCtx = useErrorContext();
  const [cities, setCities] = useState<FavoriteCity[]>();

  useEffect(() => {
    if (favCtx?.favorites.length !== 0) {
      setCities(favCtx?.favorites);
    } else {
      setCities([
        {
          city: 'Waikiki, US',
          latitude: 21.28069,
          longitude: -157.83454,
        },
        {
          city: 'Seychelles National Park, SC',
          latitude: -4.62354,
          longitude: 55.45249,
        },
        {
          city: 'Bali, IN',
          latitude: 25.19208,
          longitude: 73.27949,
        },
        {
          city: 'Exuma, BS',
          latitude: 23.60807,
          longitude: -75.90431,
        },
      ]);
    }
  }, [favCtx?.favorites]);

  return (
    <div className="flex flex-col items-center m-4 md:max-w-3xl md:mx-auto gap-y-2">
      <Logo />
      {isFetching ? (
        <div className="m-20">
          <Loader />
        </div>
      ) : !errCtx?.error ? (
        <>
          <div className="self-start font-semibold text-3xl ml-1 text-white drop-shadow-2xl">
            {favCtx?.favorites.length !== 0 ? 'Favorites' : 'Around the world'}
          </div>
          <div className="flex flex-col gap-y-4 w-full">
            {cities?.map((city) => (
              <CityItem key={city.city} city={city} />
            ))}
          </div>
        </>
      ) : errCtx?.error ? (
        <div className="mt-32">
          <ErrorMessage />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default MainPage;
