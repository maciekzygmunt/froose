import * as React from 'react';
import { useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import loadCloud from '../../assets/loadCloud.json';

const Loader = () => {
  const lottieRef = useRef(null) as React.MutableRefObject<LottieRefCurrentProps | null>;

  useEffect(() => {
    lottieRef?.current?.setSpeed(1.5);
  }, []);

  return (
    <div className="w-96">
      <Lottie animationData={loadCloud} loop={true} lottieRef={lottieRef} />
    </div>
  );
};

export default Loader;
