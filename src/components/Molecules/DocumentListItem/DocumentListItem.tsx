import { useState } from "react";
import { Book } from "../../../api/types";
import Button from "../../Atoms/Button/Button";

import DocumentListItemActions from "./DocumentListItemActions";
import DocumentListItemInfo from "./DocumentListItemInfo";
import DocumentListItemPrice from "./DocumentListItemPrice";

import { ActionContainer, ListItemContainer } from "./DocumentListItem.styled";

interface DocumentListItemProps {
  document: Book;
}

export default function DocumentListItem({ document }: DocumentListItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <ListItemContainer isExpanded={isExpanded}>
      {/* 왼쪽: 썸네일 + 책 정보 */}
      <DocumentListItemInfo document={document} isExpanded={isExpanded} />
      {isExpanded ? (
        <ActionContainer isExpanded>
          <div style={{ marginBottom: "94px" }}>
            <DocumentListItemActions
              isExpanded
              onToggleExpand={handleToggleExpand}
            />
          </div>

          <DocumentListItemPrice document={document} isExpanded />

          <Button variant="primary" size="large">
            구매하기
          </Button>
        </ActionContainer>
      ) : (
        <>
          <DocumentListItemPrice document={document} isExpanded={false} />
          <ActionContainer isExpanded={false}>
            <Button variant="primary" size="default">
              구매하기
            </Button>

            <DocumentListItemActions
              isExpanded={false}
              onToggleExpand={handleToggleExpand}
            />
          </ActionContainer>
        </>
      )}
    </ListItemContainer>
  );
}
