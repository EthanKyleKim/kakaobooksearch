export interface ModalProps {
  children: React.ReactNode;
  top?: number;
  left?: number;
  onClose: () => void;
}
