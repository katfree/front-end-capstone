import React, { Component } from "react"
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Collapse, NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';
import "./nav.css"
import { Link } from "react-router-dom"

class NavBarComponent extends Component {

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

  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }


  render() {
    return (
      <React.Fragment>
        <div>
        <Navbar className="mynavbar" light sticky expand="lg">
        <NavbarBrand href="/" style={{ color: '#041E42'}}> <strong>Breakaway Tickets</strong></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar style={{ color: '#041E42', textDecoration: 'none' }}>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink href="/messages" style={{ color: '#041E42', textDecoration: 'none' }}>Messages</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/profile" style={{ color: '#041E42', textDecoration: 'none'}}>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/" style={{ color: '#041E42', textDecoration: 'none' }}>Ticket Listings </NavLink>
          </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color: '#041E42', textDecoration: 'none'  }}>
                  Preds Info!
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                   <NavItem>
                    <NavLink href="/schedule" style={{ color: '#041E42', textDecoration: 'none'  }}>Game Schedule</NavLink>
                  </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                    <NavItem>
                     <NavLink href="/standings" style={{ color: '#041E42', textDecoration: 'none' }}>Standings</NavLink>
                   </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                   <NavItem>
                    <NavLink href="/PredatorsRoster" style={{ color: '#041E42', textDecoration: 'none' }}>Team Roster</NavLink>
                   </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Link to="/"><Button

            className="Logoutbtn"
            onClick={this.logout}>
            Logout
        </Button></Link>
          </Collapse>

        </Navbar>
      </div>
      {/* <Navbar  dark  className="mynavbar" expand="md">
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
      </Navbar> */}
      </React.Fragment>
    )
  }
}

export default NavBarComponent
