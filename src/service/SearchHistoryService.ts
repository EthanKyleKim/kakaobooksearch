export interface SearchHistoryItem {
  keyword: string;
  timestamp: number; // Unix 타임스탬프
}

export const SearchHistoryService = {
  getHistory: (): SearchHistoryItem[] => {
    const history = localStorage.getItem("searchHistory");
    return history ? JSON.parse(history) : [];
  },

  addHistory: (keyword: string): SearchHistoryItem[] => {
    const history = SearchHistoryService.getHistory();
    const timestamp = Date.now();
    const updatedHistory = [
      { keyword, timestamp },
      ...history.filter((item) => item.keyword !== keyword),
    ];
    if (updatedHistory.length > 8) updatedHistory.pop();
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    return updatedHistory;
  },

  deleteHistory: (timestamp: number): SearchHistoryItem[] => {
    const history = SearchHistoryService.getHistory();
    const updatedHistory = history.filter(
      (item) => item.timestamp !== timestamp
    );
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    return updatedHistory;
  },

  saveHistory: (history: SearchHistoryItem[]) => {
    localStorage.setItem("searchHistory", JSON.stringify(history));
  },
};
