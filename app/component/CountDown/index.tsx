"use client";

import React, { useState, useEffect } from "react";

interface CountDownProps {
  initialSeconds: number;
  isStart?: boolean;
  onFinish: () => void;
}

const CountDown = ({ initialSeconds, isStart, onFinish }: CountDownProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = isStart
      ? setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000)
      : undefined;

    return () => clearInterval(timer);
  }, [isStart]);

  useEffect(() => {
    if (seconds === 0) {
      onFinish();
      console.log("Countdown reached zero!");
    }
  }, [onFinish, seconds]);

  const displayTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes == 0 ? "00" : minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  return (
    <div className="text-right ">
      <span className="text-lg p-2 inline-block rounded-md bg-white/10 text-primary font-semibold">
        {displayTime()}
      </span>
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <CountdownTimer initialSeconds={20} /> {/* Thời gian ban đầu là 120 giây */}
//     </div>
//   );
// };

export default CountDown;
