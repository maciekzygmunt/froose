import React from 'react';
import Sun from '../assets/animated-icons/day.svg';
import Moon from '../assets/animated-icons/night.svg';
import MoonBig from '../assets/animated-icons/nightBig.svg';
import SunClouds from '../assets/animated-icons/cloudy-day-2.svg';
import MoonClouds from '../assets/animated-icons/cloudy-night-2.svg';
import Clouds from '../assets/animated-icons/cloudy.svg';
import LightRain from '../assets/animated-icons/rainy-4.svg';
import Rain from '../assets/animated-icons/rainy-5.svg';
import HeavyRain from '../assets/animated-icons/rainy-6.svg';
import LightSnow from '../assets/animated-icons/snowy-4.svg';
import Snow from '../assets/animated-icons/snowy-5.svg';
import HeavySnow from '../assets/animated-icons/snowy-6.svg';
import Thunder from '../assets/animated-icons/thunder.svg';
interface WeatherIconProps {
  code: number;
  time: number;
  big: boolean;
}

const WeatherIcon = ({ code, time, big }: WeatherIconProps) => {
  let icon = <></>;
  if (code === 1000) {
    if (time < 20 && time > 5) {
      icon = <Sun className="overflow-visible" />;
    } else if (big == false) {
      icon = <Moon className="overflow-visible" />;
    } else if (big == true) {
      icon = <MoonBig className="overflow-visible w-44" />;
    }
  } else if (code === 1100 || code === 1101) {
    if (time < 20 && time > 5) {
      icon = <SunClouds className="overflow-visible" />;
    } else {
      icon = <MoonClouds className="overflow-visible" />;
    }
  } else if (code === 1102 || code === 1001 || code === 2100 || code === 2000) {
    icon = <Clouds className="overflow-visible" />;
  } else if (code === 4000 || code === 4200 || code === 6000 || code === 6200) {
    icon = <LightRain className="overflow-visible" />;
  } else if (code === 4001 || code === 6001) {
    icon = <Rain className="overflow-visible" />;
  } else if (code === 4201 || code === 6201) {
    icon = <HeavyRain className="overflow-visible" />;
  } else if (code === 5001 || code === 5100 || code === 7102) {
    icon = <LightSnow className="overflow-visible" />;
  } else if (code === 5000 || code === 7000) {
    icon = <Snow className="overflow-visible" />;
  } else if (code === 5101 || code === 7101) {
    icon = <HeavySnow className="overflow-visible" />;
  } else if (code === 8000) {
    //TODO: fix thunder
    icon = <Thunder className="overflow-visible" />;
  }

  return icon;
};

export default React.memo(WeatherIcon);
