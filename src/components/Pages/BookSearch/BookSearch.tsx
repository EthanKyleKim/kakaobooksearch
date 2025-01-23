import { useSearchBooksInfiniteQuery } from "../../../api/useSearchBooksInfiniteQuery";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { useDetailSearchStore } from "../../../store/DetailSearchStore";
import { useTotalSearchStore } from "../../../store/TotalSearchStore";
import BookResultsAndFavorites from "../../Templates/BookResultsAndFavorites/BookResultsAndFavorites";

export default function BookSearch() {
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
  const totalCount = flatData[flatData.length - 1]?.meta.total_count || 0;

  const { lastItemRef } = useInfiniteScroll(
    isFetching,
    hasNextPage,
    fetchNextPage
  );

  return (
    <>
      <BookResultsAndFavorites
        bookResponse={documents}
        title="도서 검색"
        resultCountTitle={"도서 검색 결과"}
        totalCount={totalCount}
        emptyAreaText="검색된 결과가 없습니다."
        lastItemRef={lastItemRef}
      />
    </>
  );
}
