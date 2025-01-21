import { useState } from "react";
import { Book } from "../api/types";
import { FavoriteService } from "../service/FavoriteService";

export function useFavoriteStatus(book: Book) {
  const [isFavorite, setIsFavorite] = useState<boolean>(() =>
    FavoriteService.isFavorite(book)
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      FavoriteService.removeFromFavorites(book);
      setIsFavorite(false);
    } else {
      FavoriteService.addToFavorites(book);
      setIsFavorite(true);
    }
  };

  return { isFavorite, toggleFavorite };
}
