import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Button from "../src/components/Atoms/Button/Button";

describe("Button 컴포넌트", () => {
  it("children으로 전달된 텍스트가 버튼에 렌더링 되는지 확인", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("icon이 제공되었을 때 아이콘이 렌더링 되는지 확인", () => {
    render(
      <Button icon={<span data-testid="icon">Icon</span>}>
        Button with Icon
      </Button>
    );
    expect(screen.getByText("Button with Icon")).toBeInTheDocument(); // 버튼 텍스트 확인
    expect(screen.getByTestId("icon")).toBeInTheDocument(); // 아이콘이 존재하는지 확인
  });

  it("onClick 핸들러가 버튼 클릭 시 호출되는지 확인", () => {
    const handleClick = jest.fn(); // 클릭 이벤트 핸들러를 mock 함수로 생성
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button); // 버튼 클릭 이벤트 실행
    expect(handleClick).toHaveBeenCalledTimes(1); // 클릭 핸들러가 한 번 호출되었는지 확인
  });

  it("$buttonType에 따라 Typography가 올바른 variant로 렌더링 되는지 확인", () => {
    render(<Button $buttonType="subtitle">Subtitle Button</Button>);
    const typography = screen.getByText("Subtitle Button");
    expect(typography).toBeInTheDocument(); // 텍스트가 정상적으로 렌더링 되었는지 확인
    expect(typography.tagName.toLowerCase()).toBe("p"); // "body2"가 <p> 태그로 매핑되었는지 확인
  });

  it("$buttonType 기본값에 따라 Typography가 'caption'으로 렌더링 되는지 확인", () => {
    render(<Button>Default Caption</Button>);
    const typography = screen.getByText("Default Caption");
    expect(typography).toBeInTheDocument(); // 텍스트가 정상적으로 렌더링 되었는지 확인
    expect(typography.tagName.toLowerCase()).toBe("span"); // "caption"이 <span> 태그로 매핑되었는지 확인
  });

  it("ref가 버튼 요소에 올바르게 전달되는지 확인", () => {
    const ref = React.createRef<HTMLButtonElement>(); // ref 객체 생성
    render(<Button ref={ref}>Button with Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement); // ref가 버튼 요소를 가리키는지 확인
  });
});
