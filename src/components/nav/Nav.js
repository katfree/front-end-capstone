import React, { Component } from "react"

import {

  Navbar,

  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

import "./nav.css"

class NavBarComponent extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <Navbar color="warning" dark sticky={'top'} expand="md" className="navbar">
        <NavbarBrand href="/" className="navlogo">Breakaway Tickets</NavbarBrand>
        <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/schedule" className="navItems">Game Schedule</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/PredatorsRoster" className="navItems">Team Roster</NavLink>
        </NavItem>
          <NavItem>
            <NavLink href="/messages" className="navItems">Messages</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile" className="navItems">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" className="navItems">Ticket Listings</NavLink>
          </NavItem>
          <Button
            color="light"
            className=""
            onClick={this.logout}>
            Logout
        </Button>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBarComponent
