import axios from "axios";
import { SearchBooksResponse } from "./types";

const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;

export const searchBooks = async (
  query: string,
  pageParam: number,
  target?: string
): Promise<SearchBooksResponse> => {
  // axios params 객체를 동적으로 생성
  const params: Record<string, string | number> = {
    query,
    page: pageParam,
  };

  // target 값이 있으면만 params에 추가
  if (target) {
    params.target = target;
  }

  const response = await axios.get<SearchBooksResponse>(
    "https://dapi.kakao.com/v3/search/book",
    {
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`,
      },
      params,
    }
  );
  return response.data;
};
