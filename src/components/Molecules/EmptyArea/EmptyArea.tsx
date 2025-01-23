import IconBook from "../../../assets/icon_book.svg?react";
import Typography from "../../Atoms/Typography/Typography";
import { EmptyAreaContainer, TextContainer } from "./EmptyArea.styled";

interface EmptyAreaProps {
  text: string;
}

export default function EmptyArea({ text }: EmptyAreaProps) {
  return (
    <EmptyAreaContainer>
      <IconBook />
      <TextContainer>
        <Typography variant="caption" color="subtitle">
          {text}
        </Typography>
      </TextContainer>
    </EmptyAreaContainer>
  );
}
