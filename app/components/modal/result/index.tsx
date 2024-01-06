import Restart from "@/app/components/restart";
import React from "react";
import { useSetting } from "@/app/hooks/useSetting";
import HeaderResult from "./header";
import Header from "../../header";
import Image from "next/image";
const SECOND_PER_MINUTE = 60;

interface ResultSectionProps {
  onReset: () => void;
  onOpenChartSection: () => void;
  isShow: boolean;
  typedText: string;
  contentNeedTexted: string;
}

const ResultSection = ({
  onReset,
  isShow,
  typedText,
  contentNeedTexted,
  onOpenChartSection,
}: ResultSectionProps) => {
  const {
    setting: { time: settingTime, correctCharacter },
  } = useSetting();

  const wpm = typedText.split(" ").length / (settingTime / SECOND_PER_MINUTE);

  const acc = +(
    (correctCharacter.join("").length / contentNeedTexted.length) *
    100
  ).toFixed(2);

  const data = [
    {
      label: "Wpm",
      value: wpm,
    },
    {
      label: "Character",
      value:
        correctCharacter.length +
        "/ " +
        (contentNeedTexted.split("").length - correctCharacter.length),
    },
    {
      label: "ACC",
      value: acc,
    },
    {
      label: "Err",
      value: (100 - acc).toFixed(2) + "%",
    },
    {
      label: "Total",
      value: typedText.length,
    },
    {
      label: "Time",
      value: settingTime + "s",
    },
  ];

  if (!isShow) {
    return undefined;
  }

  return (
    <div className="fixed inset-0 bg-slate-800 z-[1] grid place-items-center">
      <div className="max-w-[660px] py-10 px-5 h-full">
        {/* HEADER */}
        <Header />
        <HeaderResult />
        {/* RESULT */}
        <div className="flex-1 grid grid-cols-3 gap-5 pb-5">
          {data.map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-sm col-span-1 bg-white/5 text-white"
            >
              <p className="text-xl mb-2">{item.label}</p>
              <p className="text-sm text-gray-500">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Restart
            disabledTransition
            onReset={() => {
              onReset();
            }}
          />
          <div>
            <button onClick={onOpenChartSection}>
              <Image src="/icon/chart.svg" width={30} height={30} alt="chart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSection;
