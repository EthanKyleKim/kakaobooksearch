import { useInfiniteQuery } from "@tanstack/react-query";
import { searchBooks } from "./kakaoApi";
import { SearchBooksResponse } from "./types";

interface UseSearchBooksInfiniteQueryParams {
  searchKeyword: string;
  detailSearchKeyword?: string;
  selectedOption?: string;
}

export const useSearchBooksInfiniteQuery = ({
  searchKeyword,
  detailSearchKeyword,
  selectedOption,
}: UseSearchBooksInfiniteQueryParams) => {
  const finalQuery = detailSearchKeyword || searchKeyword;

  const targetMap: Record<string, string> = {
    제목: "title",
    저자명: "person",
    출판사: "publisher",
  };

  // 상세검색 셀렉트 조건, 입력 이 존재해야 target 에 해당하는 값 지정
  const finalTarget =
    detailSearchKeyword && selectedOption
      ? targetMap[selectedOption]
      : undefined;

  return useInfiniteQuery<SearchBooksResponse, Error>({
    queryKey: ["searchBooks", finalQuery, finalTarget],
    queryFn: ({ pageParam = 1 }) =>
      searchBooks(finalQuery, pageParam as number, finalTarget),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.meta.is_end ? undefined : allPages.length + 1,
    enabled: !!finalQuery,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
