export const coordsToName = async (latitude: number | null, longitude: number | null) => {
  const response = await fetch(
    `https://api.positionstack.com/v1/reverse?access_key=${process.env.NEXT_PUBLIC_GEOCODER_KEY}&query=${latitude},${longitude}&limit=1`
  );

  const data = await response.json();

  if (data.data[0].locality) {
    return data.data[0].locality + ', ' + data.data[0].country_code;
  } else if (data.data[0].administrative_area) {
    return data.data[0].administrative_area + ', ' + data.data[0].country_code;
  } else if (data.data[0].county) {
    return data.data[0].county + ', ' + data.data[0].country_code;
  } else if (data.data[0].neighbourhood) {
    return data.data[0].neighbourhood + ', ' + data.data[0].country_code;
  }
};

export const nameToCoords = async (query: string) => {
  try {
    const response = await fetch(
      `https://api.positionstack.com/v1/forward?access_key=a003a4e4b50c3a472ad3f0d524bc278d&query=${query}&limit=1`
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
