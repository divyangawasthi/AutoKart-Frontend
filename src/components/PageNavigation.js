import React from "react";
import { NavLink } from "react-router-dom";
import Wrapper from "../styles/PageNavigationStyle"

const PageNavigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/products">&nbsp;/&nbsp;Products&nbsp;</NavLink>/&nbsp;
      {title}
    </Wrapper>
  );
};


export default PageNavigation;
