"use client";

import React, { useState, useEffect } from "react";

interface CountDownProps {
  initialSeconds: number;
  isStart?: boolean;
  onFinish: () => void;
}

const CountDown = ({ initialSeconds, isStart, onFinish }: CountDownProps) => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

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
    if (seconds === 0) {
      onFinish();
      console.log("Countdown reached zero!");
    }
  }, [seconds]);

  const displayTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes == 0 ? "00" : minutes < 10 ? "0" + minutes : minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div className="text-right my-5">
      <span className="text-lg p-2 inline-block rounded-md bg-white/10 text-primary font-semibold">
        {displayTime()}
      </span>
    </div>
  );
};

export default CountDown;
