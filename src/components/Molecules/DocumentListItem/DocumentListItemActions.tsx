import BracketClose from "../../../assets/icon_bracketClose.svg?react";
import BracketOpen from "../../../assets/icon_bracketOpen.svg?react";
import Button from "../../Atoms/Button/Button";

interface DocumentListItemActionsProps {
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export default function DocumentListItemActions({
  isExpanded,
  onToggleExpand,
}: DocumentListItemActionsProps) {
  return (
    <Button
      variant="secondary"
      onClick={onToggleExpand}
      icon={isExpanded ? <BracketClose /> : <BracketOpen />}
    >
      상세보기
    </Button>
  );
}
