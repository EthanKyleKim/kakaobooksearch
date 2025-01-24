import { Book } from "../../../api/types";
import Typography from "../../Atoms/Typography/Typography";
import { PriceContainer, PriceRow } from "./DocumentListItem.styled";

interface DocumentListItemPriceProps {
  document: Book;
  $isExpanded: boolean;
}

export default function DocumentListItemPrice({
  document,
  $isExpanded,
}: DocumentListItemPriceProps) {
  const { price, sale_price } = document;
  const isOnSale = sale_price !== -1;

  // 펼쳤을 때 ($isExpanded=true) 디테일 모드
  if ($isExpanded) {
    return (
      <PriceContainer $isExpanded>
        <PriceRow>
          <div style={{ width: "25%" }}>
            <Typography color="subtitle" variant="captionSmall">
              원가
            </Typography>
          </div>
          <div style={{ width: "75%" }}>
            <Typography
              color="textPrimary"
              variant={isOnSale ? "caption" : "title3"}
              textDecoration={isOnSale ? "line-through" : "none"}
            >
              {`${price.toLocaleString("ko-KR")}원`}
            </Typography>
          </div>
        </PriceRow>

        {isOnSale && (
          <PriceRow style={{ justifyContent: "right" }}>
            <div style={{ width: "25%" }}>
              <Typography color="subtitle" variant="captionSmall">
                할인가
              </Typography>
            </div>
            <div style={{ width: "75%" }}>
              <Typography color="textPrimary" variant="title3">
                {`${sale_price.toLocaleString("ko-KR")}원`}
              </Typography>
            </div>
          </PriceRow>
        )}
      </PriceContainer>
    );
  }

  // 펼치지 않았을 때 ($isExpanded=false)
  return (
    <PriceContainer $isExpanded={false}>
      <Typography color="textPrimary" variant="title3">
        {isOnSale
          ? `${sale_price.toLocaleString("ko-KR")}원`
          : `${price.toLocaleString("ko-KR")}원`}
      </Typography>
    </PriceContainer>
  );
}
