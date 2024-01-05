"use client";

import Image from "next/image";
import React from "react";

interface RestartProps {
  onReset: () => void;
  disabledTransition?: boolean;
}

const Restart = ({ onReset, disabledTransition }: RestartProps) => {
  return (
    <div className="flex justify-center my-4">
      <div
        className="flex items-center group cursor-pointer h-14 relative"
        onClick={onReset}
      >
        <div
          className={`${
            !disabledTransition &&
            "absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 group-hover:left-0 pr-4"
          } duration-300 ease-out `}
        >
          <Image
            className="group-hover:-rotate-90 duration-300 "
            src="/icon/reload.svg"
            width={30}
            height={30}
            alt="hihi"
          />
        </div>
        <div className="text-white/80 opacity-0 group-hover:opacity-100 group-hover:duration-500 pl-2">
          Try again!
        </div>
      </div>
    </div>
  );
};

export default Restart;
