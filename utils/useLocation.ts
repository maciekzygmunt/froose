import { useEffect, useState } from 'react';

interface Coords {
  latitude: number;
  longitude: number;
}

export const useLocation = (): Coords => {
  const [coords, setCoords] = useState({
    latitude: 21.280693,
    longitude: -157.834549,
  });

  const onSuccess = (pos: any) => {
    const crd = pos.coords;
    setCoords({
      latitude: crd.latitude,
      longitude: crd.longitude,
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess);
    }
  }, []);

  return coords;
};
