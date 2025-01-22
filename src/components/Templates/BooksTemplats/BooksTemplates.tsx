import { useSearchBooksInfiniteQuery } from "../../../api/useSearchBooksInfiniteQuery";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { useTotalSearchStore } from "../../../store/TotalSearchStore";
import { useDetailSearchStore } from "../../../store/DetailSearchStore";
import DocumentList from "../../Organisms/DocumentList/DocumentList";
import SearchBar from "../../Organisms/SearchBar/SearchBar";
import { BooksTemplatesContainer } from "./BooksTemplates.styled";

export default function BooksTemplates() {
  const { searchKeyword } = useTotalSearchStore();
  const { detailSearchKeyword, selectedOption } = useDetailSearchStore();

  const { data, fetchNextPage, isFetching, hasNextPage } =
    useSearchBooksInfiniteQuery({
      searchKeyword,
      detailSearchKeyword,
      selectedOption,
    });

  // 데이터를 평탄화하여 documents와 meta 추출
  const flatData = data?.pages.flatMap((page) => page) || [];
  const documents = flatData.flatMap((item) => item.documents) || [];
  const meta = flatData[flatData.length - 1]?.meta; // 마지막 페이지의 meta 정보

  const { lastItemRef } = useInfiniteScroll(
    isFetching,
    hasNextPage,
    fetchNextPage
  );

  return (
    <BooksTemplatesContainer>
      <section
        style={{
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: 960,
          marginBottom: 36,
        }}
      >
        {/* 검색바 */}
        <SearchBar meta={meta} />
      </section>
      <section>
        {/* 검색된 책 리스트 */}
        <DocumentList documents={documents} />
        <div ref={lastItemRef} style={{ height: 1 }}></div>
      </section>
    </BooksTemplatesContainer>
  );
}
