import React, { createContext, useContext, useState } from 'react';
import { FavoriteCity, FavoritesContextType } from '../types';

export const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const useFavoritesContext = () => useContext(FavoritesContext);

const FavoritesContextProvider = ({ children }: any) => {
  const [favorites, setFavorites] = useState<any>(() => {
    try {
      let array = window.localStorage.getItem('favorites');
      if (array) {
        array = JSON.parse(array);
      } else {
        window.localStorage.setItem('favorites', JSON.stringify([]));
        array = JSON.parse('[]');
      }
      return array;
    } catch (err) {
      return [];
    }
  });

  const addToFavorites = (city: string | undefined, latitude: number, longitude: number) => {
    const newArr = { city, latitude, longitude };
    const newFav = [...favorites, newArr];
    setFavorites(newFav);
    try {
      window.localStorage.setItem('favorites', JSON.stringify(newFav));
    } catch {}
  };

  const removeFromFavorites = (latitude: number, longitude: number) => {
    const newArr = favorites?.filter(
      (fav: FavoriteCity) => fav.latitude != +latitude && fav.longitude != +longitude
    );
    setFavorites(newArr);
    try {
      window.localStorage.setItem('favorites', JSON.stringify(newArr));
    } catch {}
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
