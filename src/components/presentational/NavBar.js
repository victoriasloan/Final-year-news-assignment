import React from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
import { hashHistory } from 'react-router';

const NAV_ITEMS = [
    'Business',
    'Entertainment',
    'General',
    'Technology',
    'Gaming',
    'Music',
    'Sport',
    'Science-and-Nature'
];

const NavBar = () => (
  <Navbar inverse >
  <div className="navbar__heading">
      NEWS
  </div>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">All</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
    {NAV_ITEMS.map((item, index) => {
        return (
            <NavItem
            key={index}
            eventKey={index}
            onClick={() => {hashHistory.push(`/${item}`); window.location.reload();}}>
            {item}
            </NavItem>
        );
        })
    }
    </Nav>
  </Navbar>
);

export default NavBar;
