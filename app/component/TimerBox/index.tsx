import Image from "next/image";
import React from "react";

const TIMER_OPTION = [10, 30, 60];

interface TimerBoxProps {
  time: number;
  onChangeTime: (time: number) => void;
}
const TimerBox = ({ time, onChangeTime }: TimerBoxProps) => {
  return (
    <div className="text-center">
      <div className="bg-white/10 inline-flex items-center justify-center  pl-2 rounded-md">
        <Image src="/timer.svg" alt="timer" height={30} width={30} />
        <div className="border-l border-l-white/20 h-6 ml-3"></div>
        {TIMER_OPTION.map((option) => (
          <div
            onClick={() => (option !== time ? onChangeTime(option) : undefined)}
            className={`p-2 text-xl rounded-md mx-2 cursor-pointer duration-150 ${
              time === option ? "text-primary underline" : "text-white"
            }`}
            key={option}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimerBox;
