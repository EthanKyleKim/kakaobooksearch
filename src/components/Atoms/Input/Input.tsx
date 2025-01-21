import { useEffect, useRef, useState } from "react";
import DeleteIcon from "../../../assets/icon_delete.svg?react";
import SearchIcon from "../../../assets/icon_search.svg?react";
import {
  DeleteButton,
  IconWrapper,
  InputContainer,
  InputWrapper,
  SearchListItem,
  StyledInput,
} from "./Input.styled";
import { InputProps } from "./Input.type";
import Typography from "../Typography/Typography";

export default function Input({
  placeholder,
  value,
  onChange,
  onSearch,
  onSelectHistory,
  onDeleteHistory,
  history,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // input, list 이외 부분 클릭시 닫힘
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <InputContainer ref={containerRef} isFocused={isFocused}>
      <InputWrapper>
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
        <StyledInput
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e);
            setIsFocused(true);
          }}
          onFocus={() => setIsFocused(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
              setIsFocused(false);
            }
          }}
        />
      </InputWrapper>
      {isFocused &&
        history.length > 0 &&
        history.map((item) => (
          <SearchListItem key={item.timestamp}>
            <span
              onClick={() => {
                onSelectHistory(item.keyword);
                setIsFocused(false);
              }}
            >
              <Typography variant="caption" color={"subtitle"}>
                {item.keyword}
              </Typography>
            </span>
            <DeleteButton
              onClick={(e) => {
                e.stopPropagation();
                onDeleteHistory(item.timestamp);
              }}
            >
              <DeleteIcon />
            </DeleteButton>
          </SearchListItem>
        ))}
    </InputContainer>
  );
}
