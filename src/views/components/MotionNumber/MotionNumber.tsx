import React, {useCallback, useEffect, useState} from 'react';
import {tween} from "popmotion";

interface MotionNumberProps {
  targetNumber: number;
  active: boolean;
}

const useMotionNumber = (targetNumber: number, visible: boolean) => {
  const [number, setNumber] = useState(0);
  const tweenValue = useCallback((from: number, to: number, duration = 1200) => {
    return tween({ from, to, duration }).start({
      update: (value) => setNumber(value),
    });
  }, []);
  useEffect(() => {
    if (visible) {
      const animation = tweenValue(0, targetNumber);
      return () => {
        animation.stop();
      };
    }
  }, [visible]);
  useEffect(() => {
    if (visible) {
      const animation = tweenValue(targetNumber - 1, targetNumber, 100);
      return () => {
        animation.stop();
      };
    }
  }, [targetNumber]);
  return Math.floor(number);
}

const MotionNumber: React.FC<MotionNumberProps> = React.memo(({ targetNumber, active }) => {
  const number = useMotionNumber(targetNumber, active);
  return <>{number.toLocaleString()}</>;
});

export default MotionNumber;
