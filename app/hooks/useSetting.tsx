import { create } from "zustand";
import { INITIAL_TIMER_OPTION } from "../constants";

interface SettingType {
  setting: {
    isStart: boolean;
    isFinish: boolean;
    time: number;
    wordCount: number;
    correctCharacter: string[];
    numberOfWordTest: number;
  };
  onStart: () => void;
  onFinish: () => void;
  onChangeTime: (time: number) => void;
  onReset: () => void;
  setWordResult: (wordCount: number, correctCharacter: string[]) => void;
}

export const useSetting = create<SettingType>((set) => ({
  setting: {
    isStart: false,
    isFinish: false,
    time: INITIAL_TIMER_OPTION,
    wordCount: 0,
    correctCharacter: [],
    numberOfWordTest: 50,
  },
  onStart: () =>
    set((state) => ({ setting: { ...state.setting, isStart: true } })),
  onFinish: () =>
    set((state) => ({ setting: { ...state.setting, isFinish: true } })),
  onChangeTime: (time: number) =>
    set((state) => ({ setting: { ...state.setting, time } })),
  onReset: () =>
    set((state) => ({
      setting: {
        ...state.setting,
        isStart: false,
        isFinish: false,
        wordCount: 0,
        correctCharacter: [],
      },
    })),
  setWordResult: (wordCount: number, correctCharacter: string[]) =>
    set((state) => ({
      setting: {
        ...state.setting,
        wordCount,
        correctCharacter,
      },
    })),
}));
