import { CloseButton, Overlay, StyledModal } from "./Modal.styled";
import { ModalProps } from "./Modal.type";
import IconClose from "../../../assets/icon_close.svg?react";

export default function Modal({ children, top, left, onClose }: ModalProps) {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onClose(); // 모달 닫기
  };

  // 모달 내부 클릭 핸들러
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <StyledModal top={top} left={left} onClick={handleModalClick}>
        <CloseButton onClick={onClose}>
          <IconClose />
        </CloseButton>
        {children}
      </StyledModal>
    </Overlay>
  );
}
