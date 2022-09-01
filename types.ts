export interface FavoriteCity {
  city: string | undefined;
  latitude: number;
  longitude: number;
}

export interface PreferencesContextType {
  preferences: {
    timeFormat: number;
    units: string;
  };
  toggleTimeFormat: () => void;
  toggleUnits: () => void;
}

export interface FavoritesContextType {
  favorites: {
    city: string | undefined;
    latitude: number;
    longitude: number;
  }[];
  addToFavorites: (city: string | undefined, latitude: number, longitude: number) => void;
  removeFromFavorites: (latitude: number, longitude: number) => void;
}
