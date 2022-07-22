import { useEffect, useState } from 'react';

export const useGeoLocation = () => {
  const [coords, setCoords] = useState({
    latitude: null,
    longitude: null,
  });
  const [locationLoading, setLocationLoading] = useState(false);

  const onSuccess = (pos: any) => {
    const crd = pos.coords;
    setCoords({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
    setLocationLoading(false);
  };

  const onError = () => {
    console.log('test');
  };

  useEffect(() => {
    setLocationLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
  }, []);

  return { latitude: coords.latitude, longitude: coords.longitude, locationLoading };
};
