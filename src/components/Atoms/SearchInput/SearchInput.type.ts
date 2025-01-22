import React from "react";
import { SearchHistoryItem } from "../../../service/SearchHistoryService";

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onSelectHistory: (keyword: string) => void;
  onDeleteHistory: (timestamp: number) => void;
  history: SearchHistoryItem[];
}
