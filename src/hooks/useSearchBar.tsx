import { useState } from "react";
import { Meta } from "../api/types";
import {
  SearchHistoryItem,
  SearchHistoryService,
} from "../service/SearchHistoryService";
import { useTotalSearchStore } from "../store/TotalSearchStore";

export function useSearchBar(meta: Meta) {
  // Lazy initialization으로 localstorage 초기 상태 설정
  const [history, setHistory] = useState<SearchHistoryItem[]>(() =>
    SearchHistoryService.getHistory()
  );
  const [totalSearchInputValue, setTotalSearchInputValue] = useState("");
  const totalSearchCount = meta?.total_count.toLocaleString("ko-KR") || 0;
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
    totalSearchCount,
    totalSearchInputValue,
    setTotalSearchInputValue,
    handleSearch,
    handleSelectHistory,
    handleDeleteHistory,
  };
}
