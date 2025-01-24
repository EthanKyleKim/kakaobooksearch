import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../../Atoms/Theme";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  padding: 0 160px;
  box-sizing: border-box;
`;

export const Title = styled.div`
  position: absolute;
  left: 160px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
`;

export const NavWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 56px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${theme.colors.textPrimary};
  transition: color 0.3s ease, border-bottom 0.3s ease;

  &.active {
    border-bottom: 1px solid ${theme.colors.primary};
  }

  &:hover {
    color: ${theme.colors.primary};
  }
`;
