import { useEffect, useRef } from "react";

export const useInfiniteScroll = (
  isFetching: boolean,
  hasNextPage: boolean | undefined,
  fetchNextPage: () => void
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage) return; // 더 이상 로드할 페이지가 없으면 종료

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (lastItemRef.current) {
      observerRef.current.observe(lastItemRef.current);
    }

    return () => {
      if (observerRef.current && lastItemRef.current) {
        observerRef.current.unobserve(lastItemRef.current);
      }
    };
  }, [isFetching, hasNextPage, fetchNextPage]);

  return { lastItemRef };
};
