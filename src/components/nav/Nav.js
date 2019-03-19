import React, { Component } from "react"

import {

  Navbar,

  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button } from 'reactstrap';

class NavBarComponent extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
       <Navbar color="dark" dark sticky={'top'}  expand="md" className="navbar">
          <NavbarBrand href="/">App Name</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/messages">Messages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Ticket Listings</NavLink>
              </NavItem>
              <Button

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
