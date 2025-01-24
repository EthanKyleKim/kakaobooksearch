import Typography from "../../Atoms/Typography/Typography";
import {
  HeaderContainer,
  Nav,
  NavWrapper,
  StyledNavLink,
  Title,
} from "./Header.styeld";

export default function Header() {
  return (
    <HeaderContainer>
      <Title>
        <Typography variant="title1">CERTICOS BOOKS</Typography>
      </Title>
      <NavWrapper>
        <Nav>
          <StyledNavLink to="/">
            <Typography variant="body1">도서 검색</Typography>
          </StyledNavLink>
          <StyledNavLink to="/favorites">
            <Typography variant="body1">내가 찜한 책</Typography>
          </StyledNavLink>
        </Nav>
      </NavWrapper>
    </HeaderContainer>
  );
}
