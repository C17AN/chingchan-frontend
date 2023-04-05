import styled from "@emotion/styled";
import React from "react";

type Props = {};

const Navbar = ({}: Props) => {
  return <NavbarContainer className="navbar">{/* <Item /> */}</NavbarContainer>;
};

const Item = () => {
  return <li>dd</li>;
};

const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  background: var(--primary-bg-color);
`;

export default Navbar;
