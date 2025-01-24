import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../src/components/Molecules/Header/Header";

describe("Header 컴포넌트", () => {
  it("헤더 제목이 올바르게 렌더링 되는지 확인", () => {
    render(
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Header />
      </Router>
    );

    const title = screen.getByText("CERTICOS BOOKS");
    expect(title).toBeInTheDocument(); // 헤더 제목이 렌더링 되었는지 확인
  });

  it("네비게이션 링크가 올바르게 렌더링 되는지 확인", () => {
    render(
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Header />
      </Router>
    );

    const searchLink = screen.getByText("도서 검색");
    const favoritesLink = screen.getByText("내가 찜한 책");

    expect(searchLink).toBeInTheDocument(); // "도서 검색" 링크가 렌더링 되었는지 확인
    expect(searchLink.closest("a")).toHaveAttribute("href", "/"); // "도서 검색" 링크의 href가 "/"인지 확인

    expect(favoritesLink).toBeInTheDocument(); // "내가 찜한 책" 링크가 렌더링 되었는지 확인
    expect(favoritesLink.closest("a")).toHaveAttribute("href", "/favorites"); // "내가 찜한 책" 링크의 href가 "/favorites"인지 확인
  });
});
