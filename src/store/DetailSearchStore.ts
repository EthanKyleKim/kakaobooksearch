import { create } from "zustand";

interface DetailSearchStoreProps {
  selectedOption: string;
  detailSearchKeyword: string;
  setSelectedOption: (option: string) => void;
  setDetailSearchKeyword: (keyword: string) => void;
  resetDetailSearchCondition: () => void;
}

export const useDetailSearchStore = create<DetailSearchStoreProps>((set) => ({
  selectedOption: "",
  detailSearchKeyword: "",
  setSelectedOption: (option) => set({ selectedOption: option }),
  setDetailSearchKeyword: (keyword) => set({ detailSearchKeyword: keyword }),
  resetDetailSearchCondition: () =>
    set({ selectedOption: "", detailSearchKeyword: "" }),
}));
