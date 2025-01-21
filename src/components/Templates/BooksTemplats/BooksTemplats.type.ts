import { Book, Meta } from "../../../api/types";

export interface BooksTemplatsProps {
  documents: Book[];
  meta: Meta;
  lastItemRef: React.MutableRefObject<HTMLDivElement | null>;
}
