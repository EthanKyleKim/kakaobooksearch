import styled from "styled-components";

export const SearcBarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 26px 0;
  gap: 16px;
`;

export const SearchResults = styled.div`
  display: flex;
  gap: 16px;

  & > div {
    display: flex;
    align-items: center;
  }
`;
