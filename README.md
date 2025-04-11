# KakaoBook Search

#### Atomic Design 패턴을 기반으로 구성되었으며, Figma를 통해 일관된 디자인을 설계하고 활용하였습니다.
- Atomic Design: 컴포넌트를 Atom, Molecule, Organism, Template, Page로 나누어 재사용성과 유지보수성을 극대화하였습니다.
- Template 재사용: Template을 활용하여 책 검색 화면과 찜 목록 화면을 효율적으로 재사용할 수 있도록 설계하였습니다.
- API 계층 구조: 기본적으로 Page 컴포넌트에서 API 호출이 하위 컴포넌트로 전달되는 구조로 작성되었습니다.

## 🚀 설치 및 실행
### 필수 조건

- Node.js (v16 이상)

### 설치

```bash
# 프로젝트 클론
git clone <repository-url>

# 의존성 설치
npm install
```

### 실행

```bash
# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드된 파일 미리보기
npm run preview

# 코드 린트 확인
npm run lint

# 테스트 실행
npm run test
```

## 🛠️ 사용 기술

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-FF8800?style=flat-square&logo=react&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=flat-square&logo=testing-library&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![SWC](https://img.shields.io/badge/SWC-DB7093?style=flat-square&logo=javascript&logoColor=white)

### 기술 선택 이유

- **React Query**: 서버 상태 관리 및 데이터 페칭을 간단하고 효율적으로 처리할 수 있고 다양한 상태관리를 통해 쉽게 개발 할 수 있었습니다. 또한 책 검색목록을 `IntersectionObserver API` 를 이용하여 무한 스크롤을 구현하는 과정에서 `useInfiniteQuery` 를 이용하여 더욱 쉽게 관리 할 수 있었습니다.
- **Zustand**: `Input`, `SelectBox`의 상태를 관리하기 위해 사용했습니다.

## 🌀 동작 방식

### 1. 책 검색
- 검색어를 `Input`에 입력하고 Enter를 눌러 검색할 수 있습니다.
  - 검색 기록은 최대 8건까지 저장되며, 새로운 검색어가 추가되면 가장 오래된 기록이 자동으로 삭제됩니다.
  - 검색 기록은 `LocalStorage`를 통해 관리됩니다.

- 입력된 데이터는 React Query의 `useInfiniteQuery`를 활용하여 전체 검색이 진행됩니다.

### 2. 상세검색
- 상세검색 버튼을 클릭하면 `Modal`이 열리며, `SelectBox`를 통해 제목, 저자명, 출판사 기준으로 검색을 필터링할 수 있습니다.

### 3. 검색 결과
- 검색 결과는 `IntersectionObserver API`를 활용하여 무한 스크롤 기능을 제공합니다.
- 사용자는 검색 결과에서 찜, 구매, 상세보기 옵션을 통해 추가 정보를 확인할 수 있습니다.
- 한 번의 검색으로 최대 10건의 책 데이터를 불러옵니다.
- `Template`을 이용히여 검색결과와 찜목록의 `UI`를 재사용했습니다.

### 4. 찜 기능
- 썸네일의 하트 아이콘을 클릭하면 `LocalStorage`를 이용해 찜 목록에 저장됩니다.
- 찜한 책은 "내가 찜한 책" 페이지에서 확인할 수 있습니다.


