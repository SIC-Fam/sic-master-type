"use client";

import Content from "./components/content";
import CountDown from "./components/count-down";
import TimerBox from "./components/timer-box";
import Restart from "./components/restart";
import { useSetting } from "./hooks/useSetting";
import useCountDown from "./hooks/useCountDown";
import { useUserType } from "./hooks/useUserType";
import { useCallback } from "react";
import ResultSection from "./components/result";
import { useResultSection } from "./hooks/useResultSection";

export default function Home() {
  const { setting, onChangeTime, onReset: onResetSetting } = useSetting();
  const resultSection = useResultSection();

  const { timeValue, resetCountDown } = useCountDown({
    onFinish: () => resultSection.onOpen(),
    onClear: () => handleReset(),
  });

  const { word, randomText, onResetWord, setTyped } = useUserType();

  const handleReset = useCallback(() => {
    onResetSetting();
    onResetWord();
    setTyped(false);
  }, []);

  return (
    <div>
      {setting.isFinish && (
        <ResultSection
          isShow={resultSection.open}
          onReset={handleReset}
          typedText={word}
          contentNeedTexted={randomText
            .slice(0, word.split("").length)
            .join("")}
        />
      )}

      <TimerBox onChangeTime={onChangeTime} time={setting.time} />
      <CountDown timeValue={timeValue} />
      <Content randomText={randomText} word={word} />
      <Restart
        onReset={() => {
          resetCountDown();
          handleReset();
        }}
      />
    </div>
  );
}
