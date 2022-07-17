import Sun from '../icons/animated/day.svg';

interface WeatherIconProps {
  code: number;
}

const WeatherIcon = ({ code }: WeatherIconProps) => {
  let icon = <></>;
  switch (code) {
    case 0:
      break;
    case 1000:
  }
  icon = <Sun />;
  return icon;
};
export default WeatherIcon;
