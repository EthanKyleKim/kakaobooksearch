import { Book } from "../../../api/types";
import DocumentListItem from "../../Molecules/DocumentListItem/DocumentListItem";

interface DocumentListProps {
  documents: Book[];
}

export default function DocumentList({ documents }: DocumentListProps) {
  return (
    <>
      {documents.map((document, index) => {
        return <DocumentListItem key={index} document={document} />;
      })}
    </>
  );
}
