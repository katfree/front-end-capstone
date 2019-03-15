import React, { Component } from "react"
import { Button } from 'reactstrap';
import "./login.css"
import UserManager from "../../modules/UserManager"
import { Link } from "react-router-dom";

export default class Login extends Component {
  // Set initial state
  state = {
    password: "",
    username: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }


  handleLogin = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      UserManager.searchUP(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password!")
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            this.props.setAuth()
          }
        }
      )
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  render() {
    return (
      <React.Fragment>
      <h1 className="logoHeader">App Header</h1>
      <form className="loginForm">
      <div className="loginFormContainer shadow">

        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <div className="form-group shadow">
        <label htmlFor="inputUsername">Username</label>
        <input
          onChange={this.handleFieldChange}
          type="username"
          className="form-control"
          aria-describedby="emailHelp"
          id="username"
          placeholder={` Something Cool`}
          required=""
          autoFocus=""
        />
        </div>
        <div class="form-group shadow">
        <label htmlFor="inputPassword">Password</label>
        <input
          onChange={this.handleFieldChange}
          type="password"
          className="form-control"
          id="password"
          placeholder={` Don't tell!`}
          required=""
        />
        </div>
        <Button color="success" type="submit" class="btn btn-primary" onClick={this.handleLogin}>
          Sign in
        </Button>

      <Link className="toregistrationForm" to={`/register`}>Register</Link>
      </div>
      </form>
      </React.Fragment>





    )
  }
}
