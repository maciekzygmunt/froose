import { useRouter } from 'next/router';
import useLocalStorage from '../hooks/useLocalStorage';
import useWeather from '../hooks/useWeather';
import { FavoriteCity } from '../types';
import { useFavoritesContext } from '../context/favoritesContext';

interface FavoriteStarProps {
  city: string | undefined;
}

const FavoriteStar = ({ city }: FavoriteStarProps) => {
  const router = useRouter();
  const coords = router?.query?.coords!;
  const favCtx = useFavoritesContext();

  const date = new Date();
  const hour = date.getHours();

  const checkIfFavorite = () => {
    const filteredFavs = favCtx?.favorites.filter(
      (item: FavoriteCity) => item.latitude == +coords[0] && item.longitude == +coords[1]
    );
    if (filteredFavs!.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  const starHandler = () => {
    if (!checkIfFavorite()) {
      favCtx?.addToFavorites(city, coords[0], coords[1]);
    } else {
      favCtx?.removeFromFavorites(+coords[0], +coords[1]);
    }
  };

  return (
    <div onClick={starHandler} className="ml-2 mt-4 hover:scale-105 transition-all duration-150">
      <svg
        width="38"
        height="38"
        viewBox="0 0 49 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`stroke-2 ${hour < 20 && hour > 5 ? 'stroke-slate-700' : 'stroke-slate-300'}   ${
          checkIfFavorite() ? 'fill-amber-400' : 'fill-transparent'
        }`}
      >
        <path d="M24.9755 1.08156L29.9741 16.4656C30.1749 17.0836 30.7508 17.502 31.4007 17.502H47.5764C48.0607 17.502 48.2621 18.1218 47.8703 18.4065L34.7839 27.9144C34.2581 28.2963 34.0381 28.9734 34.2389 29.5914L39.2375 44.9754C39.3872 45.4361 38.8599 45.8191 38.4681 45.5344L25.3817 36.0266C24.8559 35.6446 24.1441 35.6446 23.6183 36.0266L10.5319 45.5344C10.1401 45.8191 9.61281 45.4361 9.76249 44.9754L14.7611 29.5914C14.9619 28.9734 14.7419 28.2963 14.2161 27.9144L1.12974 18.4065C0.737879 18.1218 0.939269 17.502 1.42363 17.502H17.5993C18.2492 17.502 18.8251 17.0836 19.0259 16.4656L24.0245 1.08156C24.1741 0.620904 24.8259 0.620906 24.9755 1.08156Z" />
      </svg>
    </div>
  );
};
export default FavoriteStar;
