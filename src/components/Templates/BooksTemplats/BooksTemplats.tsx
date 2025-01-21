import DocumentList from "../../Organisms/DocumentList/DocumentList";
import SearchBar from "../../Organisms/SearchBar/SearchBar";
import { BooksTemplatsContainer } from "./BooksTemplats.styled";
import { BooksTemplatsProps } from "./BooksTemplats.type";

export default function BooksTemplats({
  documents,
  meta,
  lastItemRef,
}: BooksTemplatsProps) {
  return (
    <BooksTemplatsContainer>
      <section
        style={{
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: 960,
          marginBottom: 36,
        }}
      >
        <SearchBar meta={meta} />
      </section>
      <section>
        <DocumentList documents={documents} />
        <div ref={lastItemRef} style={{ height: 1 }}></div>
      </section>
    </BooksTemplatsContainer>
  );
}
