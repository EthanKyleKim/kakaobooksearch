import SearchInput from "../../Atoms/SearchInput/SearchInput";
import { SearcBarContainer, SearchHeader } from "./SerachBar.styeld";
import DetailSearchModal from "../DetailSearchModal/DetailSearchModal";
import { useSearchBar } from "../../../hooks/useSearchBar";

export default function SearchBar() {
  const {
    history,
    totalSearchInputValue,
    setTotalSearchInputValue,
    handleSearch,
    handleSelectHistory,
    handleDeleteHistory,
  } = useSearchBar();

  return (
    <SearcBarContainer>
      <SearchHeader>
        <SearchInput
          placeholder="검색어 입력"
          value={totalSearchInputValue}
          onChange={(e) => setTotalSearchInputValue(e.target.value)}
          onSearch={handleSearch}
          history={history}
          onSelectHistory={handleSelectHistory}
          onDeleteHistory={handleDeleteHistory}
        />
        <DetailSearchModal
          setTotalSearchInputValue={setTotalSearchInputValue}
        />
      </SearchHeader>
    </SearcBarContainer>
  );
}
