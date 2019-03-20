import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./login.css"
import UserManager from "../../modules/UserManager"
import { Link } from "react-router-dom"
import logo from "./logo.png"

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

      <h1 className="logoHeader"><img src={logo}/></h1>
      <Form className="loginForm">
      <div className="loginFormContainer">

      {/* <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1> */}


      <FormGroup>
        <Label htmlFor="inputUsername">Username</Label>
        <Input
          onChange={this.handleFieldChange}
          type="username"
          className="form-control"
          aria-describedby="emailHelp"
          id="username"
          placeholder={` Something Cool`}
          required=""
          autoFocus=""
        />
       </FormGroup>
        <FormGroup>
        <Label htmlFor="inputPassword">Password</Label>
        <Input
          onChange={this.handleFieldChange}
          type="password"
          className="form-control"
          id="password"
          placeholder={` Don't tell!`}
          required=""
        />
        </FormGroup>

        <Button color="success" type="submit" className="btn btn-primary" onClick={this.handleLogin}>
          Sign in
        </Button>

      <Link className="toregistrationForm" to={`/register`}>Register</Link>
      </div>
      </Form>
      </React.Fragment>





    )
  }
}
