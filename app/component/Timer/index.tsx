"use client";

import { useEffect } from "react";

type TimerProps = {
  timer: number | Date;
  reset: () => void;
};

const Timer = ({ timer, reset }: TimerProps) => {
  //   useEffect(() => {
  //     reset();
  //   }, [reset]);

  const formatedTimer = {
    minutes: new Date(timer).getUTCMinutes(),
    seconds: new Date(timer).getUTCSeconds(),
  };
  console.log(formatedTimer);

  return (
    <div className="flex justify-end">
      <div className=" rounded-lg p-3" style={{}}>
        <span className="text-right font-mono text-lg lg:text-xl" style={{}}>
          {formatedTimer.minutes === 0
            ? "00"
            : formatedTimer.minutes < 10
            ? `0${formatedTimer.minutes}`
            : formatedTimer.minutes}
          :
          {formatedTimer.seconds < 10
            ? `0${formatedTimer.seconds}`
            : formatedTimer.seconds}
        </span>
      </div>
    </div>
  );
};

export default Timer;
