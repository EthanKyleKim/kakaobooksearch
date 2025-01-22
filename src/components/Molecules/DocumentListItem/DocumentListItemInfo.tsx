import { Book } from "../../../api/types";
import FavoriteIcon from "../../../assets/icon_favorite.svg?react";
import FavoriteFillIcon from "../../../assets/icon_favorite_fill.svg?react";
import { useFavoriteStatus } from "../../../hooks/useFavoriteStatus";
import Typography from "../../Atoms/Typography/Typography";
import {
  FavoriteIconWrapper,
  InfoContainer,
  ThumbnailWrapper,
} from "./DocumentListItem.styled";

interface DocumentListItemInfoProps {
  document: Book;
  isExpanded: boolean;
}

export default function DocumentListItemInfo({
  document,
  isExpanded,
}: DocumentListItemInfoProps) {
  const { thumbnail, title, authors, contents } = document;
  const bookContentWithEllipsis = contents ? `${contents}...` : "-";

  // 커스텀 훅 사용
  const { isFavorite, toggleFavorite } = useFavoriteStatus(document);

  return (
    <>
      {/* 썸네일 + 찜 아이콘 */}
      <ThumbnailWrapper isExpanded={isExpanded}>
        <img src={thumbnail} alt="thumbnail" width="100%" height="100%" />

        <FavoriteIconWrapper isExpanded={isExpanded} onClick={toggleFavorite}>
          {isFavorite ? <FavoriteFillIcon /> : <FavoriteIcon />}
        </FavoriteIconWrapper>
      </ThumbnailWrapper>

      {/* 책 정보 */}
      <InfoContainer isExpanded={isExpanded}>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Typography color="textPrimary" variant="title3">
            {title}
          </Typography>
          {authors.map((author) => (
            <Typography color="textSecondary" variant="body2" key={author}>
              {author}
            </Typography>
          ))}
        </div>

        {isExpanded && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              width: "360px",
            }}
          >
            <Typography color="textPrimary" variant="body2Bold">
              책 소개
            </Typography>
            <Typography variant="captionSmall" lineHeight="16px">
              {bookContentWithEllipsis}
            </Typography>
          </div>
        )}
      </InfoContainer>
    </>
  );
}
