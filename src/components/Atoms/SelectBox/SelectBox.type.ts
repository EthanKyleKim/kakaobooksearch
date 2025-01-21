export interface Option {
  value: string;
  label: string;
}

export interface SelectBoxProps {
  options: Option[];
  placeholder?: string;
  onSelect: (value: string) => void;
}
