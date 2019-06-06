import React, { Component } from "react"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';
import "./nav.css"
import { Link } from "react-router-dom"

class NavBarComponent extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <Navbar color="warning" dark  className="mynavbar">
        <NavbarBrand href="/" >Breakaway Tickets</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="/schedule" style={{ color: 'white', textDecoration: 'none' }}>Game Schedule</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/standings" style={{ color: 'white', textDecoration: 'none' }}>Standings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/PredatorsRoster" style={{ color: 'white', textDecoration: 'none' }}>Team Roster</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/messages" style={{ color: 'white', textDecoration: 'none' }}>Messages</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" style={{ color: 'white', textDecoration: 'none' }}>Ticket Listings</NavLink>
          </NavItem>
          <Link to="/"><Button
            color="light"
            className=""
            onClick={this.logout}>
            Logout
        </Button></Link>
        </Nav>
      </Navbar>

    )
  }
}

export default NavBarComponent
