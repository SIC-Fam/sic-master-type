"use client";

import Content from "./component/Content";
import CountDown from "./component/CountDown";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import TimerBox from "./component/TimerBox";
import Header from "./component/Header";

export default function Home() {
  const router = useRouter();
  const [setting, setSetting] = useState({
    isStart: false,
    isFinish: false,
    time: 10,
    wordCount: 0,
    correctWord: 0,
    numberOfWordTest: 50,
  });

  console.log(setting);

  const onStart = () => {
    setSetting((prev) => ({ ...prev, isStart: true }));
  };

  const onFinish = () => {
    setSetting((prev) => ({ ...prev, isFinish: true }));
  };

  const onChangeTime = (time: number) => {
    setSetting((prev) => ({ ...prev, time }));
  };

  const setWordResult = useCallback(
    (wordCount: number, correctWord: number) => {
      setSetting((prev) => ({
        ...prev,
        wordCount,
        correctWord,
      }));
    },
    []
  );

  return (
    <div className={`flex-col flex items-center bg-slate-900 p-5 h-screen`}>
      <div className="w-full flex flex-1 flex-col justify-between max-w-[960px]">
        <Header />
        <div className="flex-1 grid place-items-center">
          <div>
            <TimerBox onChangeTime={onChangeTime} time={setting.time} />
            <CountDown
              isStart={setting.isStart}
              initialSeconds={setting.time}
              onFinish={onFinish}
            />
            <Content
              isFinish={setting.isFinish}
              numberOfWordTest={setting.numberOfWordTest}
              onStart={onStart}
              onFinish={setWordResult}
            />
            <div>restart</div>
          </div>
        </div>
        <div>CLUB WEBSITE, FACEBOOK</div>
      </div>
    </div>
  );
}
