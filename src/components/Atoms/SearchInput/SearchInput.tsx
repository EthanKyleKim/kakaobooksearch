import DeleteIcon from "../../../assets/icon_delete.svg?react";
import SearchIcon from "../../../assets/icon_search.svg?react";
import {
  DeleteButton,
  IconWrapper,
  InputContainer,
  InputWrapper,
  SearchListContainer,
  SearchListItem,
  StyledInput,
} from "./SearchInput.styled";
import Typography from "../Typography/Typography";
import { InputProps } from "./SearchInput.type";
import { useSearchInput } from "../../../hooks/useSearchInput";

export default function SearchInput(props: InputProps) {
  const {
    isFocused,
    setIsFocused,
    containerRef,
    hasHistory,
    handleChange,
    handleKeyDown,
    handleSelectHistory,
    handleDeleteHistory,
  } = useSearchInput(props);

  return (
    <InputContainer
      ref={containerRef}
      $isFocused={isFocused}
      $hasHistory={hasHistory}
    >
      <InputWrapper>
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
        <StyledInput
          placeholder={props.placeholder}
          value={props.value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onKeyDown={handleKeyDown}
        />
      </InputWrapper>

      <SearchListContainer $isFocused={isFocused}>
        {props.history.map((item) => (
          <SearchListItem
            key={item.timestamp}
            onClick={() => handleSelectHistory(item.keyword)}
          >
            <Typography variant="caption" color="subtitle">
              {item.keyword}
            </Typography>
            <DeleteButton
              onClick={(e) => handleDeleteHistory(e, item.timestamp)}
            >
              <DeleteIcon />
            </DeleteButton>
          </SearchListItem>
        ))}
      </SearchListContainer>
    </InputContainer>
  );
}
