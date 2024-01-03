"use client";

import Content from "./component/Content";
import CountDown from "./component/CountDown";
import TimerBox from "./component/TimerBox";
import Header from "./component/Header";
import Restart from "./component/Restart";
import { useSetting } from "./hooks/useSetting";
import useCountDown from "./hooks/useCountDown";
import { useUserType } from "./hooks/useUserType";
import { useCallback, useState } from "react";
import Modal from "./component/Modal";

export default function Home() {
  const { setting, onChangeTime, onReset } = useSetting();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const { timeValue, onResetTimeDisplay } = useCountDown();

  const { word, randomText, onResetWord } = useUserType();

  const handleReset = useCallback(() => {
    onReset();
    onResetTimeDisplay();
    onResetWord();
  }, []);

  return (
    <div>
      <TimerBox onChangeTime={onChangeTime} time={setting.time} />
      <CountDown timeValue={timeValue} />
      <Content randomText={randomText} word={word} />
      <Restart onReset={handleReset} />
    </div>
  );
}
