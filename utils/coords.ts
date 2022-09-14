export const coordsToName = async (latitude: number | null, longitude: number | null) => {
  const response = await fetch(
    `https://api.tomtom.com/search/2/reverseGeocode/${latitude},${longitude}.json?key=${process.env.NEXT_PUBLIC_GEOCODER_KEY}`
  );

  const data = await response.json();

  if (data?.addresses[0]?.address?.municipalitySubdivision) {
    return (
      data.addresses[0].address.municipalitySubdivision +
      ', ' +
      data.addresses[0].address.countryCode
    );
  } else if (data?.addresses[0]?.address?.municipality) {
    return data.addresses[0].address.municipality + ', ' + data.addresses[0].address.countryCode;
  }
};

export const nameToCoords = async (query: string) => {
  const queryEncoded = encodeURIComponent(query);
  try {
    const response = await fetch(
      `https://api.tomtom.com/search/2/geocode/${queryEncoded}.json?key=${process.env.NEXT_PUBLIC_GEOCODER_KEY}`
    );
    const data = await response.json();

    return {
      latitude: data.results[0].position.lat,
      longitude: data.results[0].position.lon,
    };
  } catch {
    return null;
  }
};
