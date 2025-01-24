import { useRef, useState } from "react";
import Button from "../../Atoms/Button/Button";
import Modal from "../../Atoms/Modal/Modal";
import SelectBox from "../../Atoms/SelectBox/SelectBox";
import UnderlinedInput from "../../Atoms/UnderlinedInput/UnderlinedInput";
import { useDetailSearchStore } from "../../../store/DetailSearchStore";
import { useTotalSearchStore } from "../../../store/TotalSearchStore";

interface DetailSearchModalProps {
  setTotalSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function DetailSearchModal({
  setTotalSearchInputValue,
}: DetailSearchModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCoordinates, setModalCoordinates] = useState({ top: 0, left: 0 });
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchOptionValue, setSearchOptionValue] = useState("제목");
  const buttonRef = useRef<HTMLButtonElement>(null);

  const {
    setSelectedOption,
    setDetailSearchKeyword,
    resetDetailSearchCondition,
  } = useDetailSearchStore();
  const { setTotalSearchKeyword } = useTotalSearchStore();

  const handleSelect = (value: string) => {
    setSearchOptionValue(value);
  };

  const openModal = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setModalCoordinates({
        top: rect.bottom + window.scrollY + 15,
        left: rect.left + window.scrollX - 150,
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    // state 초기화
    setSearchInputValue("");
    setSearchOptionValue("제목");

    // zustand 상세검색 조건 초기화
    resetDetailSearchCondition();
    setIsModalOpen(false);
  };

  const handleSearch = () => {
    closeModal();
    // zustand 상세검색 조건 저장
    setDetailSearchKeyword(searchInputValue);
    setSelectedOption(searchOptionValue);

    // 전체검색 조건 zustand, state 초기화
    setTotalSearchKeyword("");
    setTotalSearchInputValue("");
  };

  return (
    <>
      <Button ref={buttonRef} $buttonType="subtitle" onClick={openModal}>
        상세검색
      </Button>
      {isModalOpen && (
        <Modal
          onClose={closeModal}
          top={modalCoordinates.top}
          left={modalCoordinates.left}
        >
          <div style={{ display: "flex", gap: 4 }}>
            <SelectBox
              options={[
                { value: "title", label: "제목" },
                { value: "author", label: "저자명" },
                { value: "publisher", label: "출판사" },
              ]}
              placeholder="선택"
              onSelect={handleSelect}
              value={searchOptionValue}
            />
            <UnderlinedInput
              placeholder="검색어 입력"
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
            />
          </div>
          <Button size="full" onClick={handleSearch}>
            검색하기
          </Button>
        </Modal>
      )}
    </>
  );
}
