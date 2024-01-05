import { create } from "zustand";

interface ResultSectionType {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useResultSection = create<ResultSectionType>((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
}));
