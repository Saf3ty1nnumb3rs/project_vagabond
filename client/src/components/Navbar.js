import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Dropdown, Menu } from "semantic-ui-react";

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
  h1 {
    font-family: "Permanent Marker", cursive;
    font-size: 48px;
  }
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
  .inner-nav {
    height: 44px;
    color: white;
  }
  a.white-letter {
    color: white;
  }
  a {
    text-align: center;
    color: black;
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
          <h1>{!this.props.city_name ? null : this.props.city_name}</h1>
        </LogoWrap>
        <NavLinkWrap>
          <Button color="purple" className="inner-nav">
            <Link className="white-letter" to="/">
              Login
            </Link>
          </Button>
          <Button color="purple" className="inner-nav white-letter" onClick={this.props.toggleShowLogin}>
            Sign Up
          </Button>
          <Menu color="purple" compact>
            <Dropdown button item text="Cities" color="purple">
              <Dropdown.Menu color="purple">
                {this.props.cities.map(city => {
                  return (
                    <Dropdown.Item as={Link} to={`/cities/${city.id}`}>
                      {city.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </NavLinkWrap>
      </NavWrap>
    );
  }
}

export default Navbar;
