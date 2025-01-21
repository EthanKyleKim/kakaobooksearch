import { useSuspenseQuery } from "@tanstack/react-query";
import { searchBooks } from "../api/kakaoApi";
import { SearchBooksResponse } from "../api/types";

export const useSearchBooks = (query: string, page: number) => {
  return useSuspenseQuery<SearchBooksResponse, Error>({
    queryKey: ["searchBooks", query, page],
    queryFn: () => searchBooks(query, page),
  });
};
