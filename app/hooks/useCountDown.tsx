import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSetting } from "./useSetting";

const useCountDown = () => {
  const {
    setting: { time, isStart },
    onFinish,
  } = useSetting();

  const [seconds, setSeconds] = useState<number>(time);

  const timeValue = useMemo(() => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes == 0 ? "00" : minutes < 10 ? "0" + minutes : minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  }, [seconds]);

  const onResetTimeDisplay = () => {
    setSeconds(time);
  };

  useEffect(() => {
    setSeconds(time);
  }, [time]);

  useEffect(() => {
    const timer =
      isStart && seconds
        ? setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }, 1000)
        : undefined;

    return () => clearInterval(timer);
  }, [isStart, seconds]);

  useEffect(() => {
    if (isStart && seconds === 0) {
      onFinish();
      console.log("Countdown reached zero!");
    }
  }, [isStart, seconds]);

  return { timeValue, onResetTimeDisplay };
};

export default useCountDown;
