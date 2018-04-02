import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blueviolet;
  box-shadow: 1px 4px 8px 1px rgba(0, 0, 0, 0.8);
  align-items: center;
  z-index: 1000;

  a {
    color: white;
  }
`;

const LogoWrap = styled.div`
  display: inline-flex;
  justify-content: space-around;
  margin-left: 10vw;
`;

const NavLinkWrap = styled.div`
  text-align: center;
  display: inline-flex;
  white-space: nowrap;
  font-size: 20px;
  margin-right: 8vw;
  color: white;
  height: 6vw;
  align-items: center;

  a {
    text-align: center;
    color: white;
    a:visited {
      color: lightgray;
    }
  }
  .inner-nav {
    margin: 0 12px;
  }
`;
class Navbar extends Component {
  render() {
    return (
      <NavWrap>
        <LogoWrap>
          <Link to="/">
            <h1>Vagabond</h1>
          </Link>
        </LogoWrap>
        <NavLinkWrap>
          <Button color="purple" className="inner-nav">
            <Link to="/">Login</Link>
          </Button>
          <Button color="purple" className="inner-nav">
            <Link to="#">Sign Up</Link>
          </Button>
        </NavLinkWrap>
      </NavWrap>
    );
  }
}

export default Navbar;
