import { create } from "zustand";

interface TotalSearchStoreProps {
  searchKeyword: string;
  setTotalSearchKeyword: (keyword: string) => void;
}

export const useTotalSearchStore = create<TotalSearchStoreProps>((set) => ({
  searchKeyword: "",
  setTotalSearchKeyword: (keyword) => set({ searchKeyword: keyword }),
}));
