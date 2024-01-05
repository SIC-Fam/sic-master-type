import { create } from "zustand";

interface ChartType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useChart = create<ChartType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
