import { useState } from "react";
import {
  SearchHistoryItem,
  SearchHistoryService,
} from "../service/SearchHistoryService";
import { useTotalSearchStore } from "../store/TotalSearchStore";

export function useSearchBar() {
  // Lazy initialization으로 localstorage 초기 상태 설정
  const [history, setHistory] = useState<SearchHistoryItem[]>(() =>
    SearchHistoryService.getHistory()
  );
  const [totalSearchInputValue, setTotalSearchInputValue] = useState("");
  const { setTotalSearchKeyword } = useTotalSearchStore();

  const handleSearch = () => {
    const updatedHistory = SearchHistoryService.addHistory(
      totalSearchInputValue.trim()
    );
    setTotalSearchKeyword(totalSearchInputValue);
    setHistory(updatedHistory);
  };

  const handleSelectHistory = (keyword: string) => {
    setTotalSearchInputValue(keyword);
    setTotalSearchKeyword(keyword);
  };

  const handleDeleteHistory = (timestamp: number) => {
    const updatedHistory = SearchHistoryService.deleteHistory(timestamp);
    setHistory(updatedHistory);
  };

  return {
    history,
    totalSearchInputValue,
    setTotalSearchInputValue,
    handleSearch,
    handleSelectHistory,
    handleDeleteHistory,
  };
}
