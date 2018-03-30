import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrap = styled.div`
  background-color: greenyellow;
`;
class Navbar extends Component {
  render() {
    return (
      <NavWrap>
        <h1>Vagabond</h1>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
        </div>
      </NavWrap>
    );
  }
}

export default Navbar;
