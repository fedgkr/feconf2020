import React, {useEffect, useState} from 'react';
import {tween} from "popmotion";

interface MotionNumberProps {
  targetNumber: number;
  active: boolean;
}

const useMotionNumber = (targetNumber: number, visible: boolean) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    let animation;
    if (visible) {
      animation = tween({
        from: 0,
        to: targetNumber,
        duration: 1050,
      }).start({
        update: (value) => setNumber(value),
      });
    }
    return () => {
      if (animation) {
        animation.stop();
      }
    };
  }, [visible]);
  return Math.floor(number);
}

const MotionNumber: React.FC<MotionNumberProps> = React.memo(({ targetNumber, active }) => {
  const number = useMotionNumber(targetNumber, active);
  return <>{number.toLocaleString()}</>;
});

export default MotionNumber;
