import React from 'react';
import { string, bool, func, oneOfType } from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import logo from '../img/logo.svg';

export default class NavBar extends React.Component {
  //   static propTypes = {
  //     light: bool,
  //     dark: bool,
  //     fixed: string,
  //     color: string,
  //     role: string,
  //     expand: oneOfType([bool, string]),
  //     tag: oneOfType([func, string])
  //     // pass in custom element to use
  //   };

  centerStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar
          className="mx-auto nav-custom"
          expand="md"
          style={{
            display: 'flex'
          }}
        >
          <NavbarBrand href="/">
            <span className="d-none d-sm-inline">
              <img src={logo} alt="logo" height="30" />
            </span>
            <span className="px-1"> BAD HABIT RACEWORKS</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/photos">Photos</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/map">Map</NavLink>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
        <hr className="slash" />
      </div>
    );
  }
}
