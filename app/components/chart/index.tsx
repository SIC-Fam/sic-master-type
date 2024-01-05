import { TIMER_OPTION } from "@/app/constants";
import React from "react";
import Modal from "../modal";

interface ChartProp {
  settingTime: number;
}

const Chart = ({ isOpen, onClose, settingTime }: ChartProp) => {
  return (
    <Modal className="" isOpen={isOpen} onClose={onClose}>
      <div className="w-[460px]">
        <div className="bg-primary w-full p-2 text-center text-white">
          Charts
        </div>
        <div className="flex items-center justify-center my-4">
          <div className="flex">
            {TIMER_OPTION.map((time) => (
              <div
                className={`bg-white/10 mx-3 px-2 py-1 text-sm rounded-sm cursor-pointer ${
                  settingTime === time && "text-primary"
                }`}
                key={time}
              >
                {time}
              </div>
            ))}
          </div>

          <div className="border-r h-4 mx-2"></div>

          <div className="flex text-sm">
            {["All", "Daily"].map((option) => (
              <div
                className={`bg-white/10 mx-3 px-2 py-1 rounded-sm cursor-pointer`}
                key={option}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        <div className="grid-cols-4">
          <div></div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-primary">
              <td className="w-8">#</td>
              <td className="w-[140px]">Name</td>
              <td className="w-14">Wpm</td>
              <td className="w-[70px]">Acc</td>
              <td>Date</td>
            </tr>
          </thead>

          <tbody className="text-gray-500">
            {[1, 2, 3, 4].map((row) => (
              <tr key={row}>
                <td>{row}</td>
                <td>Bui Ngoc</td>
                <td>62</td>
                <td>100 %</td>
                <td>11:59 04 Jan 2024</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Modal>
  );
};

export default Chart;
