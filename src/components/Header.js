import * as React from "react"
import styled from "@emotion/styled";
import { Link } from "gatsby"

const HeaderWrapper = styled.div`
  height: 40px;
  display: absolute;
  width: 100%;
  background: white;
  // put content in center
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #0073ec;

  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderLink = styled(Link)`
  color: black;
  margin-left: 16px;
  text-decoration: none;
  border-bottom: 1px solid #0073ec;
  font-family: "Roboto", sans-serif;
`;

const Header = () => {
  return (
    <HeaderWrapper>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/resume">Resumé</HeaderLink>
        <HeaderLink to="/contact">Contact</HeaderLink>
        <HeaderLink to="/posts">Posts</HeaderLink>
    </HeaderWrapper>
  )
}

export default Header;