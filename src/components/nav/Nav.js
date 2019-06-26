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
      <React.Fragment>
      {/* <nav id="nav-wrap" className="">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>

         </ul>

      </nav> */}
      <Navbar  dark  className="mynavbar">
        <NavbarBrand href="/" style={{ color: '#041E42'}}> <strong>Breakaway Tickets</strong></NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="/schedule" style={{ color: '#041E42', textDecoration: 'none', borderRight: '1px solid #041E42',  }}>Game Schedule</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/standings" style={{ color: '#041E42', textDecoration: 'none', borderRight: '1px solid #041E42' }}>Standings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/PredatorsRoster" style={{ color: '#041E42', textDecoration: 'none', borderRight: '1px solid #041E42' }}>Team Roster</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/messages" style={{ color: '#041E42', textDecoration: 'none', borderRight: '1px solid #041E42' }}>Messages</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile" style={{ color: '#041E42', textDecoration: 'none', borderRight: '1px solid #041E42' }}>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" style={{ color: '#041E42', textDecoration: 'none' }}>Ticket Listings</NavLink>
          </NavItem>
          <Link to="/"><Button
            color="light"
            className="Logoutbtn"
            onClick={this.logout}>
            Logout
        </Button></Link>
        </Nav>
      </Navbar>
      </React.Fragment>
    )
  }
}

export default NavBarComponent
