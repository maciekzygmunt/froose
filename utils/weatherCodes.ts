export const codeToWeatherTitle = (code: number) => {
  let title = '';
  if (code === 1000) {
    title = 'Clear';
  } else if (
    code === 1100 ||
    code === 2101 ||
    code === 2106 ||
    code === 4203 ||
    code === 4205 ||
    code === 4213 ||
    code === 4209 ||
    code === 4211 ||
    code === 5115 ||
    code === 5102 ||
    code === 5105 ||
    code === 5119 ||
    code === 6003 ||
    code === 6205 ||
    code === 6213 ||
    code === 6207 ||
    code === 7110 ||
    code === 7108 ||
    code === 7113
  ) {
    title = 'Mostly Clear';
  } else if (
    code === 1101 ||
    code === 1103 ||
    code === 2107 ||
    code === 4204 ||
    code === 4214 ||
    code === 4208 ||
    code === 4202 ||
    code === 5116 ||
    code === 5103 ||
    code === 5106 ||
    code === 5120 ||
    code === 6002 ||
    code === 6203 ||
    code === 6214 ||
    code === 6202 ||
    code === 7111 ||
    code === 7107 ||
    code === 7114
  ) {
    title = 'Partly Cloudy';
  } else if (
    code === 1102 ||
    code === 2103 ||
    code === 2108 ||
    code === 4215 ||
    code === 4210 ||
    code === 4212 ||
    code === 5117 ||
    code === 5104 ||
    code === 5107 ||
    code === 5121 ||
    code === 6004 ||
    code === 6209 ||
    code === 6215 ||
    code === 6208 ||
    code === 7112 ||
    code === 7109 ||
    code === 7116
  ) {
    title = 'Mostly Cloudy';
  } else if (code === 1001) {
    title = 'Cloudy';
  } else if (code === 2100) {
    title = 'Light Fog';
  } else if (code === 2000) {
    title = 'Fog';
  } else if (
    code === 4000 ||
    code === 5122 ||
    code === 5110 ||
    code === 6204 ||
    code === 6212 ||
    code === 7105
  ) {
    title = 'Drizzle';
  } else if (code === 4200 || code === 6206 || code === 6220 || code === 7115) {
    title = 'Light Rain';
  } else if (code === 4001 || code === 5108 || code === 6222 || code === 7117) {
    title = 'Rain';
  } else if (code === 4201) {
    title = 'Heavy Rain';
  } else if (code === 5001) {
    title = 'Flurries';
  } else if (code === 5100) {
    title = 'Light Snows';
  } else if (code === 5000 || code === 5114 || code === 5112) {
    title = 'Snow';
  } else if (code === 5101) {
    title = 'Heavy Snow';
  } else if (code === 6000) {
    title = 'Freezing Drizzle';
  } else if (code === 6200) {
    title = 'Light Freezing Drizzle';
  } else if (code === 6001 || code === 7106 || code === 7103) {
    title = 'Freezing Rain';
  } else if (code === 6201) {
    title = 'Heavy Freezing Rain';
  } else if (code === 7102) {
    title = 'Light Ice Pellets';
  } else if (code === 7000) {
    title = 'Ice Pellets';
  } else if (code === 7101) {
    title = 'Heavy Ice Pellets';
  } else if (code === 8000 || code === 8001 || code === 8003 || code === 8002) {
    title = 'Thunderstorm';
  }

  return title;
};
