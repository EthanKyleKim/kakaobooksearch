import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const StyledModal = styled.div<{ top?: number; left?: number }>`
  position: absolute;
  top: ${({ top }) => (top ? `${top}px` : "50%")};
  left: ${({ left }) => (left ? `${left}px` : "50%")};
  transform: ${({ top, left }) =>
    top && left ? "none" : "translate(-50%, -50%)"};
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 360px;
  border-radius: 8px;
  padding: 36px 24px;
  box-shadow: 0px 4px 14px 6px rgba(0, 0, 0, 0.1);
  background: white;
  z-index: 1000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
