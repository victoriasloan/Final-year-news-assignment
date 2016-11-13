import React from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
import { hashHistory } from 'react-router';


const NavBar = () => (
  <Navbar inverse >
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="/">Business</NavItem>
      <NavItem eventKey={2} href="#">Entertainment</NavItem>
      <NavItem eventKey={3} href="#">General</NavItem>
      <NavItem eventKey={4} href="#">Technology</NavItem>
      <NavItem eventKey={5} href="#">Gaming</NavItem>
      <NavItem eventKey={6} href="#">Music</NavItem>
      <NavItem eventKey={7} href="#">Sport</NavItem>
      <NavItem eventKey={8} href="#">Science & Nature</NavItem>

    </Nav>
  </Navbar>
);

export default NavBar;
