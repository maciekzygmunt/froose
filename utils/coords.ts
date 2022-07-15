export const coordsToName = async (latitude: number | null, longitude: number | null) => {
  const response = await fetch(
    `http://api.positionstack.com/v1/reverse?access_key=${process.env.NEXT_PUBLIC_GEOCODER_KEY}&query=${latitude},${longitude}&limit=1`
  );

  const data = await response.json();

  // if (data.data[0].administrative_area) {
  //   return data.data[0].administrative_area;
  // } else if (data.data[0].county) {
  //   return data.data[0].county;
  // }
  return data.data[0].label;
};

export const nameToCoords = async (query: string) => {
  try {
    const response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=a003a4e4b50c3a472ad3f0d524bc278d&query=${query}&limit=1`
    );
    const data = await response.json();
    return {
      latitude: data.data[0].latitude,
      longitude: data.data[0].longitude,
    };
  } catch {
    return null;
  }
};
