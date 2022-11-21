import React from "react";

import logo from "../../assets/logo.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setLoggedIn, setLogInDetails } from "../../redux/reducers/authSlice";

import {
  Logo,
  LogoImg,
  LogoTitle,
  LogoutButton,
  NavBarLink,
  NavBarLinkList,
  Wrapper
} from "./NavBar.style";

const NavBar = () => {
  const { loggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const Logout = () => {
    dispatch(setLogInDetails({ username: null, password: null }));
    dispatch(setLoggedIn(false));
  };

  return (
    <Wrapper>
      <Logo to="/">
        <LogoImg src={logo} />
        <LogoTitle>News</LogoTitle>
      </Logo>
      <NavBarLinkList>
        <NavBarLink to="/profile">Profile</NavBarLink>
        <NavBarLink to="/news">News</NavBarLink>
        {loggedIn ? (
          <LogoutButton onClick={Logout}>Log out</LogoutButton>
        ) : (
          <NavBarLink to="/login">Log in</NavBarLink>
        )}
      </NavBarLinkList>
    </Wrapper>
  );
};

export default NavBar;
