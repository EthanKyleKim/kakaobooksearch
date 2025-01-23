import { Book } from "../../../api/types";
import Typography from "../../Atoms/Typography/Typography";
import EmptyArea from "../../Molecules/EmptyArea/EmptyArea";
import ResultCount from "../../Molecules/ResultCount/ResultCount";
import DocumentList from "../../Organisms/DocumentList/DocumentList";
import SearchBar from "../../Organisms/SearchBar/SearchBar";
import {
  BookResultsAndFavoritesContainer,
  ListSection,
  SearchAndFavoritesSection,
  Spacer,
} from "./BookResultsAndFavorites.styled";

interface BookResultsAndFavoritesProps {
  bookResponse: Book[];
  useSearchInput?: boolean;
  title: string;
  resultCountTitle: string;
  totalCount: number;
  emptyAreaText: string;
  lastItemRef?: React.RefObject<HTMLDivElement>;
}

export default function BookResultsAndFavorites({
  bookResponse,
  useSearchInput = true,
  title,
  resultCountTitle,
  totalCount,
  emptyAreaText,
  lastItemRef,
}: BookResultsAndFavoritesProps) {
  const hasBookList = bookResponse.length > 0;

  return (
    <BookResultsAndFavoritesContainer>
      {/* 검색 및 찜 관련 */}
      <SearchAndFavoritesSection>
        <Typography variant="title2">{title}</Typography>
        {useSearchInput && (
          <div style={{ marginTop: "16px" }}>
            <SearchBar />
          </div>
        )}
        <div style={{ marginTop: "24px" }}>
          <ResultCount title={resultCountTitle} count={totalCount} />
        </div>
      </SearchAndFavoritesSection>
      {/* 검색된 책 리스트 */}
      <ListSection>
        {!hasBookList ? (
          <EmptyArea text={emptyAreaText} />
        ) : (
          <>
            <DocumentList documents={bookResponse} />
            <Spacer ref={lastItemRef} />
          </>
        )}
      </ListSection>
    </BookResultsAndFavoritesContainer>
  );
}
