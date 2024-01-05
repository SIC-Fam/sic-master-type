import { useEffect, useMemo, useState } from "react";
import { useSetting } from "./useSetting";
import { useUserType } from "./useUserType";

const useCountDown = ({
  onFinish: onFinishCountDown,
  onClear,
}: {
  onFinish: () => void;
  onClear?: () => void;
}) => {
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

  const resetCountDown = () => {
    setSeconds(time);
  };

  useEffect(() => {
    setSeconds(time);
    onClear?.();
    console.log("onClear function called!");
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
      onFinishCountDown();
      console.log("Countdown reached zero!");
    }
  }, [isStart, seconds]);

  return { timeValue, resetCountDown };
};

export default useCountDown;
