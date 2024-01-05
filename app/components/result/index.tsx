import Modal from "@/app/components/modal";
import Restart from "@/app/components/restart";
import React, { useState } from "react";
import Chart from "../chart";
import { useSetting } from "@/app/hooks/useSetting";
import { useResultSection } from "@/app/hooks/useResultSection";
import HeaderResult from "./header";
import Header from "../header";
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
  const resultSection = useResultSection();

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

  return (
    <Modal isOpen={isShow} onClose={resultSection.onClose}>
      <div className="py-10 w-full px-5 h-full">
        {/* HEADER */}
        <Header />
        <HeaderResult />
        {/* RESULT */}
        <div className="flex-1 grid grid-cols-3 gap-5">
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
    </Modal>
  );
};

export default ResultSection;
