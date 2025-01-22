import { Book } from "../api/types";

export const FavoriteService = {
  /**
   * 로컬 스토리지에서 전체 찜 목록(Book[]) 가져오기
   */
  getFavorites(): Book[] {
    const stored = localStorage.getItem("favoriteBooks");
    return stored ? JSON.parse(stored) : [];
  },

  /**
   * 해당 Book이 찜 목록에 있는지 여부
   */
  isFavorite(book: Book): boolean {
    const favorites = FavoriteService.getFavorites();
    return favorites.some((f) => f.isbn === book.isbn);
  },

  /**
   * 찜 추가 (이미 있으면 추가하지 않음)
   */
  addToFavorites(book: Book): Book[] {
    const favorites = FavoriteService.getFavorites();
    if (favorites.some((f) => f.isbn === book.isbn)) {
      return favorites; // 이미 존재하면 그대로 반환
    }
    const updated = [book, ...favorites];
    localStorage.setItem("favoriteBooks", JSON.stringify(updated));
    return updated;
  },

  /**
   * 찜 해제 (해당 Book 제거)
   */
  removeFromFavorites(book: Book): Book[] {
    const favorites = FavoriteService.getFavorites();
    const updated = favorites.filter((f) => f.isbn !== book.isbn);
    localStorage.setItem("favoriteBooks", JSON.stringify(updated));
    return updated;
  },
};
