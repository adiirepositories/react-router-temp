import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './home.svg'; 
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
  NavbarText
} from 'reactstrap';


const Navs = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="sm" >
        <NavbarBrand href="/">
        <img
        alt=" "
        src={Logo}
        style={{
          height: 30,
          width: 30
        }}
      />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <Link to="/">
                    <NavLink>Home</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/temp">
                    <NavLink>WeatherApp</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/about">
                    <NavLink>About</NavLink>
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/login">
                    <NavLink>Register</NavLink>
                </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Weather App</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navs;
