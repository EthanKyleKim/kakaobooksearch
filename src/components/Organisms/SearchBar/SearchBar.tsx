import { useState } from "react";
import {
  SearchHistoryItem,
  SearchHistoryService,
} from "../../../service/SearchHistoryService";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import Typography from "../../Atoms/Typography/Typography";
import { SearcBarContainer } from "./SerachBar.styeld";
import { Meta } from "../../../api/types";

export default function SearchBar({ meta }: { meta: Meta }) {
  // Lazy initialization으로 localstorage 초기 상태 설정
  const [history, setHistory] = useState<SearchHistoryItem[]>(() =>
    SearchHistoryService.getHistory()
  );
  // input value
  const [inputValue, setInputValue] = useState("");

  // 검색된 문서 수
  const totalCount = meta.total_count.toLocaleString("ko-KR");

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    const updatedHistory = SearchHistoryService.addHistory(inputValue.trim());
    setHistory(updatedHistory);
    setInputValue("");
  };

  const handleSelectHistory = (keyword: string) => {
    setInputValue(keyword);
  };

  const handleDeleteHistory = (timestamp: number) => {
    const updatedHistory = SearchHistoryService.deleteHistory(timestamp);
    setHistory(updatedHistory);
  };

  return (
    <SearcBarContainer>
      <Typography variant="title2">도서 검색</Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "16px 0px 26px 0px",
          gap: 16,
        }}
      >
        <Input
          placeholder="검색어 입력"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSearch={handleSearch}
          history={history}
          onSelectHistory={handleSelectHistory}
          onDeleteHistory={handleDeleteHistory}
        />
        <Button buttonType="subtitle">상세검색</Button>
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <div style={{ display: "flex" }}>
          <Typography variant="body2">도서 검색 결과</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <Typography variant="body2">총&nbsp;</Typography>
          <Typography variant="body2" color="primary">
            {totalCount}
          </Typography>
          <Typography variant="body2">건</Typography>
        </div>
      </div>
    </SearcBarContainer>
  );
}
