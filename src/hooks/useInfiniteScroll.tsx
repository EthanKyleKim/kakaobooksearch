import { useEffect, useRef } from "react";

/** BookList 무한 스크롤 Hook */
export const useInfiniteScroll = (
  isFetching: boolean,
  onLoadMore: () => void
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching) {
          onLoadMore();
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
  }, [isFetching, onLoadMore]);

  return { lastItemRef };
};
