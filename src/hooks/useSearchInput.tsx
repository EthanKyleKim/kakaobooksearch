import { useEffect, useRef, useState } from "react";
import { InputProps } from "../components/Atoms/SearchInput/SearchInput.type";
import { useDetailSearchStore } from "../store/DetailSearchStore";

export const useSearchInput = ({
  onChange,
  onSearch,
  onSelectHistory,
  onDeleteHistory,
  history,
}: InputProps) => {
  const { resetDetailSearchCondition } = useDetailSearchStore(); // 상세 검색 키워드 & 옵션
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasHistory = history.length > 0;

  // 외부 클릭 시 포커스 해제
  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setIsFocused(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
      setIsFocused(false);
      // zustand 상세검색 조건 초기화
      resetDetailSearchCondition();
    }
  };

  const handleSelectHistory = (keyword: string) => {
    onSelectHistory(keyword);
    // zustand 상세검색 조건 초기화
    resetDetailSearchCondition();
    setIsFocused(false);
  };

  const handleDeleteHistory = (
    e: React.MouseEvent<HTMLButtonElement>,
    timestamp: number
  ) => {
    e.stopPropagation();
    onDeleteHistory(timestamp);
  };

  return {
    isFocused,
    setIsFocused,
    containerRef,
    hasHistory,
    handleChange,
    handleKeyDown,
    handleSelectHistory,
    handleDeleteHistory,
  };
};
