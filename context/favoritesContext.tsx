import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';
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
      toast.success('Added to favorites.', {
        position: 'bottom-center',
      });
    } catch {
      toast.error('Something went wrong..', {
        position: 'bottom-center',
      });
    }
  };

  const removeFromFavorites = (latitude: number, longitude: number) => {
    const newArr = favorites?.filter(
      (fav: FavoriteCity) => fav.latitude != +latitude && fav.longitude != +longitude
    );
    setFavorites(newArr);
    try {
      window.localStorage.setItem('favorites', JSON.stringify(newArr));
      toast('Removed from favorites.', {
        position: 'bottom-center',
        icon: '🗑️',
      });
    } catch {
      toast.error('Something went wrong..', {
        position: 'bottom-center',
      });
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
