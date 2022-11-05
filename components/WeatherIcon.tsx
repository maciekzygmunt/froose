import React from 'react';
import dynamic from 'next/dynamic';

import Sun from '../assets/animated-icons/day.svg';
import Moon from '../assets/animated-icons/nightBig.svg';
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

import SunSmall from '../assets/static-icons/day.svg';
import MoonSmall from '../assets/static-icons/night.svg';
import SunCloudsSmall from '../assets/static-icons/cloudy-day-2.svg';
import MoonCloudsSmall from '../assets/static-icons/cloudy-night-2.svg';
import CloudsSmall from '../assets/static-icons/cloudy.svg';
import LightRainSmall from '../assets/static-icons/rainy-4.svg';
import RainSmall from '../assets/static-icons/rainy-5.svg';
import HeavyRainSmall from '../assets/static-icons/rainy-6.svg';
import LightSnowSmall from '../assets/static-icons/snowy-4.svg';
import SnowSmall from '../assets/static-icons/snowy-5.svg';
import HeavySnowSmall from '../assets/static-icons/snowy-6.svg';
import ThunderSmall from '../assets/static-icons/thunder.svg';
interface WeatherIconProps {
  code: number;
  time: number;
  big?: boolean;
}

const WeatherIcon = ({ code, time, big = false }: WeatherIconProps) => {
  let icon = <></>;
  if (code === 1000) {
    if (time < 20 && time > 5) {
      icon = big ? <Sun className="overflow-visible" /> : <SunSmall className="overflow-visible" />;
    } else {
      icon = big ? (
        <Moon className="overflow-visible w-44" />
      ) : (
        <MoonSmall className="overflow-visible" />
      );
    }
  } else if (code === 1100 || code === 1101) {
    if (time < 20 && time > 5) {
      icon = big ? (
        <SunClouds className="overflow-visible" />
      ) : (
        <SunCloudsSmall className="overflow-visible" />
      );
    } else {
      icon = big ? (
        <MoonClouds className="overflow-visible" />
      ) : (
        <MoonCloudsSmall className="overflow-visible" />
      );
    }
  } else if (code === 1102 || code === 1001 || code === 2100 || code === 2000) {
    icon = big ? (
      <Clouds className="overflow-visible" />
    ) : (
      <CloudsSmall className="overflow-visible" />
    );
  } else if (code === 4000 || code === 4200 || code === 6000 || code === 6200) {
    icon = big ? (
      <LightRain className="overflow-visible" />
    ) : (
      <LightRainSmall className="overflow-visible" />
    );
  } else if (code === 4001 || code === 6001) {
    icon = big ? <Rain className="overflow-visible" /> : <RainSmall className="overflow-visible" />;
  } else if (code === 4201 || code === 6201) {
    icon = big ? (
      <HeavyRain className="overflow-visible" />
    ) : (
      <HeavyRainSmall className="overflow-visible" />
    );
  } else if (code === 5001 || code === 5100 || code === 7102) {
    icon = big ? (
      <LightSnow className="overflow-visible" />
    ) : (
      <LightSnowSmall className="overflow-visible" />
    );
  } else if (code === 5000 || code === 7000) {
    icon = big ? <Snow className="overflow-visible" /> : <SnowSmall className="overflow-visible" />;
  } else if (code === 5101 || code === 7101) {
    icon = big ? (
      <HeavySnow className="overflow-visible" />
    ) : (
      <HeavySnowSmall className="overflow-visible" />
    );
  } else if (code === 8000) {
    //TODO: fix thunder
    icon = big ? (
      <Thunder className="overflow-visible" />
    ) : (
      <ThunderSmall className="overflow-visible" />
    );
  }

  return icon;
};

export default React.memo(WeatherIcon);
