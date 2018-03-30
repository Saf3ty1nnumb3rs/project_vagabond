import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: blueviolet;

  a {
    color: white;
  }
`;

const NavLinkWrap = styled.div`
  text-align: center;
  display: inline-flex;
  white-space: nowrap;
  font-size: 28px;
  margin-right: 5vw;
  color: white;
  a {
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
        <Link to="/">
          <h1>Vagabond</h1>
        </Link>
        <NavLinkWrap>
          <div className="inner-nav">
            <Link to="/">Login</Link>
          </div>
          <div className="inner-nav">
            <Link to="#">Sign Up</Link>
          </div>
          
        </NavLinkWrap>
      </NavWrap>
    );
  }
}

export default Navbar;
