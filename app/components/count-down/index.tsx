"use client";

import React, { memo } from "react";

interface CountDownProps {
  timeValue: string;
}
const CountDown = ({ timeValue }: CountDownProps) => {
  return (
    <div className="text-right my-5">
      <span className=" p-2 inline-block rounded-md bg-white/10 text-primary font-semibold">
        {timeValue}
      </span>
    </div>
  );
};

export default memo(CountDown);
