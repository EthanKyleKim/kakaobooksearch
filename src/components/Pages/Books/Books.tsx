import { useEffect, useState } from "react";
import { Book } from "../../../api/types";
import { useSearchBooks } from "../../../api/useSearchBooks";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import BooksTemplats from "../../Templates/BooksTemplats/BooksTemplats";

export default function Books() {
  const [page, setPage] = useState(1);
  const [documents, setDocuments] = useState<Book[]>([]);
  const { data, isFetching } = useSearchBooks("무라카미 하루키", page);

  // 무한 스크롤을 이용한 책 리스트 호출
  const { lastItemRef } = useInfiniteScroll(isFetching, () => {
    setPage((prevPage) => prevPage + 1);
  });

  useEffect(() => {
    if (data) {
      setDocuments((prev) => [...prev, ...data.documents]);
    }
  }, [data]);

  return (
    <>
      <BooksTemplats
        documents={documents}
        meta={data.meta}
        lastItemRef={lastItemRef}
      />
    </>
  );
}
