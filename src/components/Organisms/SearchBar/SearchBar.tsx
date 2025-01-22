import SearchInput from "../../Atoms/SearchInput/SearchInput";
import Typography from "../../Atoms/Typography/Typography";
import {
  SearcBarContainer,
  SearchHeader,
  SearchResults,
} from "./SerachBar.styeld";
import DetailSearchModal from "../../Molecules/DetailSearchModal/DetailSearchModal";
import { Meta } from "../../../api/types";
import { useSearchBar } from "../../../hooks/useSearchBar";

export default function SearchBar({ meta }: { meta: Meta }) {
  const {
    history,
    totalSearchCount,
    totalSearchInputValue,
    setTotalSearchInputValue,
    handleSearch,
    handleSelectHistory,
    handleDeleteHistory,
  } = useSearchBar(meta);

  return (
    <SearcBarContainer>
      <Typography variant="title2">도서 검색</Typography>
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

      <SearchResults>
        <div>
          <Typography variant="body2">도서 검색 결과</Typography>
        </div>
        <div>
          <Typography variant="body2">총&nbsp;</Typography>
          <Typography variant="body2" color="primary">
            {totalSearchCount}
          </Typography>
          <Typography variant="body2">건</Typography>
        </div>
      </SearchResults>
    </SearcBarContainer>
  );
}
