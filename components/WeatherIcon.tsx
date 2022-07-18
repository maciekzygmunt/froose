import Sun from '../icons/animated/day.svg';
import Moon from '../icons/animated/night.svg';
import SunClouds from '../icons/animated/cloudy-day-2.svg';
import MoonClouds from '../icons/animated/cloudy-night-2.svg';
import Clouds from '../icons/animated/cloudy.svg';
import LightRain from '../icons/animated/rainy-4.svg';
import Rain from '../icons/animated/rainy-5.svg';
import HeavyRain from '../icons/animated/rainy-6.svg';
import LightSnow from '../icons/animated/snowy-4.svg';
import Snow from '../icons/animated/snowy-5.svg';
import HeavySnow from '../icons/animated/snowy-6.svg';
import Thunder from '../icons/animated/thunder.svg';
interface WeatherIconProps {
  code: number;
  time: number;
}

const WeatherIcon = ({ code, time }: WeatherIconProps) => {
  let icon = <></>;
  if (code === 1000) {
    if (time < 20 && time > 5) {
      icon = <Sun className="w-7 h-7 overflow-visible" />;
    } else {
      icon = <Moon className="w-7 h-7 overflow-visible" />;
    }
  } else if (code === 1100 || code === 1101) {
    if (time < 20 && time > 5) {
      icon = <SunClouds className="w-7 h-7 overflow-visible" />;
    } else {
      icon = <MoonClouds className="w-7 h-7 overflow-visible" />;
    }
  } else if (code === 1102 || code === 1001 || code === 2100 || code === 2000) {
    icon = <Clouds className="w-7 h-7 overflow-visible" />;
  } else if (code === 4000 || code === 4200 || code === 6000 || code === 6200) {
    icon = <LightRain className="w-7 h-7 overflow-visible" />;
  } else if (code === 4001 || code === 6001) {
    icon = <Rain className="w-7 h-7 overflow-visible" />;
  } else if (code === 4201 || code === 6201) {
    icon = <HeavyRain className="w-7 h-7 overflow-visible" />;
  } else if (code === 5001 || code === 5100 || code === 7102) {
    icon = <LightSnow className="w-7 h-7 overflow-visible" />;
  } else if (code === 5000 || code === 7000) {
    icon = <Snow className="w-7 h-7 overflow-visible" />;
  } else if (code === 5101 || code === 7101) {
    icon = <HeavySnow className="w-7 h-7 overflow-visible" />;
  } else if (code === 8000) {
    //TODO: fix thunder
    icon = <Thunder className="w-7 h-7 overflow-visible " />;
  }

  return icon;
};
export default WeatherIcon;
