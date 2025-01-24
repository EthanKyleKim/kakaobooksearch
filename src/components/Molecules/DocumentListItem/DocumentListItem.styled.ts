import styled from "styled-components";

export const ListItemContainer = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d2d6da;
  padding: ${({ $isExpanded }) =>
    $isExpanded ? "24px 16px 40px 54px" : "0px 16px 0px 48px"};
  min-height: 100px;
  max-height: 344px;
`;

export const ThumbnailWrapper = styled.div<{ $isExpanded: boolean }>`
  /* 기존 코드 유지 */
  position: relative; /* 아이콘을 절대 위치시킬 수 있도록 추가 */
  margin-right: ${({ $isExpanded }) => ($isExpanded ? "32px" : "48px")};
  width: ${({ $isExpanded }) => ($isExpanded ? "210px" : "48px")};
  height: ${({ $isExpanded }) => ($isExpanded ? "280px" : "64px")};
`;

export const FavoriteIconWrapper = styled.div<{ $isExpanded: boolean }>`
  position: absolute;
  top: ${({ $isExpanded }) => ($isExpanded ? "8px" : "0px")};
  right: ${({ $isExpanded }) => ($isExpanded ? "8px" : "0px")};
  cursor: pointer;

  svg {
    width: ${({ $isExpanded }) => ($isExpanded ? "24px" : "16px")};
    height: ${({ $isExpanded }) => ($isExpanded ? "24px" : "16px")};
  }
`;

export const InfoContainer = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-right: ${({ $isExpanded }) => ($isExpanded ? "0" : "22px")};
  width: 408px;
`;

export const PriceContainer = styled.div<{ $isExpanded: boolean }>`
  width: 132px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: ${({ $isExpanded }) => ($isExpanded ? "28px" : "0")};
`;

export const ActionContainer = styled.div<{ $isExpanded: boolean }>`
  display: flex;
  flex-direction: ${({ $isExpanded }) => ($isExpanded ? "column" : "row")};
  align-items: ${({ $isExpanded }) => ($isExpanded ? "flex-end" : "center")};
  gap: 8px;
  height: ${({ $isExpanded }) => ($isExpanded ? "280px" : "100%")};
`;

export const PriceRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  text-align: right;
`;
