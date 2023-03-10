import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import MainHeader from "../styles/MainHeaderStyle";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
    // <NavBar />
  );
};

export default Header;
