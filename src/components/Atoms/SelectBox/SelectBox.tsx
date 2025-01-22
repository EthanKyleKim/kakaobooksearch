import { useState } from "react";
import BracketOpen from "../../../assets/icon_bracketOpen.svg?react";
import {
  Container,
  Icon,
  OptionItem,
  Options,
  StyledSelectBox,
} from "./SelectBox.styled";
import { SelectBoxProps } from "./SelectBox.type";
import Typography from "../Typography/Typography";

export default function SelectBox({
  options,
  placeholder = "Select",
  onSelect,
  value,
}: SelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <Container>
      <StyledSelectBox onClick={() => setIsOpen(!isOpen)}>
        <Typography variant="body2Bold">{selected || placeholder}</Typography>
        <Icon>
          <BracketOpen />
        </Icon>
      </StyledSelectBox>
      {isOpen && (
        <Options>
          {options.map((option) => (
            <OptionItem
              key={option.value}
              onClick={() => handleSelect(option.label)}
            >
              <Typography variant="caption" color="subtitle">
                {option.label}
              </Typography>
            </OptionItem>
          ))}
        </Options>
      )}
    </Container>
  );
}
