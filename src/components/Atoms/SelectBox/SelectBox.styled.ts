import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100px;
`;

export const StyledSelectBox = styled.div`
  height: 36px;
  padding: 0px 4px 0px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid #d2d6da;
  cursor: pointer;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
`;

export const Options = styled.ul`
  position: absolute;
  top: 46px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1000;
  padding: 0;
  margin: 0;
  list-style: none;
  box-shadow: 0px 4px 14px 6px rgba(0, 0, 0, 0.1);
`;

export const OptionItem = styled.li`
  width: 100%;
  height: 30px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;
