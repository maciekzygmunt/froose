export interface FavoriteCity {
  city: string;
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
