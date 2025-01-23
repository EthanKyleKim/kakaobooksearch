import { FavoriteService } from "../../../service/FavoriteService";
import BookResultsAndFavorites from "../../Templates/BookResultsAndFavorites/BookResultsAndFavorites";

export default function Favorites() {
  const { getFavorites } = FavoriteService;
  const favoriteList = getFavorites();
  const totalCount = favoriteList.length || 0;

  return (
    <>
      <BookResultsAndFavorites
        bookResponse={favoriteList}
        useSearchInput={false}
        title="내가 찜한 책"
        resultCountTitle="찜한 책"
        totalCount={totalCount}
        emptyAreaText="찜한 책이 없습니다."
      />
    </>
  );
}
