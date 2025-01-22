import { StyledUnderlinedInput } from "./UnderlinedInput.styled";
import { UnderlinedInputProps } from "./UnderlinedInput.type";

export default function UnderlinedInput({
  placeholder,
  value,
  onChange,
}: UnderlinedInputProps) {
  return (
    <StyledUnderlinedInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
