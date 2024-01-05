import { TIMER_OPTION } from "@/app/constants";
import React, { memo } from "react";
import Modal from "../modal";

interface ChartProp {
  settingTime: number;
  isOpen: boolean;
  onClose: () => void;
  onReset: () => void;
}

const Chart = ({ settingTime, isOpen, onClose, onReset }: ChartProp) => {
  return (
    <Modal
      containerProps={{ className: "bg-black/60 z-[102]" }}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="w-[500px] bg-slate-800 p-5 rounded-md">
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
        <div className="flex gap-5 mt-5 pt-4 border-t border-t-gray-700">
          <button
            onClick={onReset}
            className="text-primary p-2 rounded-sm duration-200 hover:bg-white/10 flex-1"
          >
            Restart
          </button>
          <button
            onClick={onClose}
            className="text-white/60 rounded-sm duration-200 hover:bg-white/10 p-2 flex-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default memo(Chart);
