import { useEffect, useState } from 'react';

interface Coords {
  latitude: number;
  longitude: number;
}

export const useGeoLocation = (): Coords => {
  const [coords, setCoords] = useState({
    latitude: 21.280693,
    longitude: -157.834549,
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSuccess = (pos: any) => {
    const crd = pos.coords;
    setCoords({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
  };

  const onError = () => {
    setError(true);
  };

  useEffect(() => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
    setLoading(false);
  }, []);

  return {
    coords,
    loading,
  };
};
