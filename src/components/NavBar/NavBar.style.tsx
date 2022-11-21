import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 3rem;
  filter: invert(100%) sepia(100%) saturate(62%) hue-rotate(332deg)
    brightness(114%) contrast(102%);
`;

const LogoTitle = styled.h3`
  font-size: 1.3rem;
`;

const NavBarLinkList = styled.ul`
  display: flex;
  font-size: 1.5rem;
  gap: 5rem;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavBarLink = styled(NavLink)`
  position: relative;
  font-weight: 700;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    transition: width 0.5s ease;
    height: 2px;
    background-color: #ff0000;
  }

  &:hover {
    color: red;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: red;
    &::after {
      width: 100%;
    }
  }
`;

const LogoutButton = styled.button`
  background: transparent;
  font-size: inherit;
  font-family: inherit;
  border: none;
  font-weight: 700;
  cursor: pointer;
  color: #fff;
`;

export {
  Logo,
  LogoImg,
  LogoTitle,
  LogoutButton,
  NavBarLink,
  NavBarLinkList,
  Wrapper
};
