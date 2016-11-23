import React from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
import { hashHistory } from 'react-router';
import Clock from 'react-clock';
import AnalogClock, { Themes } from 'react-analog-clock';
import Time from 'react-time';

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

let todaysDate = new Date();


const NavBar = () => (
<div>
    <div className="navbar__top">
        <h1 className="navbar__heading">
            NewsFlash
        </h1>
        <div className="navbar__analog">
            <AnalogClock theme={Themes.dark} width={150}/>
        </div>
        <div className="navbar__dateTime">
            <p className="navbar__time"><Clock/></p>
            <p><Time value={todaysDate} format="DD/MM/YYYY"/></p>
        </div>

    </div>

  <Navbar>
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
  </div>
);

export default NavBar;
