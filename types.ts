export interface FavoriteCity {
  city: string;
  latitude: number;
  longitude: number;
}

export interface TimeFormatContextType {
  timeFormat: number;
  toggleTimeFormat: () => void;
}
