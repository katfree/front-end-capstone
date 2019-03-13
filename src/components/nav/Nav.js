import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
class Nav extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <nav className="navbar bg-dark navbar-dark fixed-top flex-md-nowrap p-0 shadow">
        <ul className="nav ">
          <li className="nav-item text-warning">
            <Link className="nav-link " to="/messages">
              Messages
            </Link>
          </li>
          <li className="nav-item text-warning">
            <Link className="nav-link " to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item text-warning">
            <Link className="nav-link " to="/">
              Ticket Listings
            </Link>
          </li>
        </ul>
        <a className="nav-link text-white">
        App Name/logo
        {/* Aloha 🌺 {this.props.activeUser.username} */}
        </a>
        <button
          type="button"
          className="btn btn-outline-info "
          onClick={this.logout}>
          Logout
        </button>
      </nav>
    )
  }
}

export default Nav
