import axios from "axios";
import { SearchBooksResponse } from "./types";

const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

export const searchBooks = async (
  query: string,
  page: number
): Promise<SearchBooksResponse> => {
  const response = await axios.get<SearchBooksResponse>(
    "https://dapi.kakao.com/v3/search/book",
    {
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`,
      },
      params: {
        query,
        page
      },
    }
  );
  return response.data;
};
