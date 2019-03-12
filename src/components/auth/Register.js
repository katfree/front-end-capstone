
import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"

export default class Register extends Component {


    state = {
        username: "",
        password: "",
        firstName: "",
        lastName: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    handleRegister = async e => {
        e.preventDefault()
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        if (this.state.username && this.state.password) {
            const users = await UserManager.searchUsername(this.state.username);
            if (users.length) {
                alert(`Username ${this.state.username} already exits!`);
            }
            else {
                UserManager.addUser(newUser)
                .then(user => {
                    sessionStorage.setItem("credentials", parseInt(user.id));
                    this.props.setAuth();
                })
                .then(() => this.props.history.push('/'));
            }
        } else {
            alert("Please Fill Out Form 😬!")
        }
    }

    render() {
        return (
            <div className ="RegistrationForm">
            <div className ="RegistrationForm">
                <form >
                    <h1 className="h3 mb-3 font-weight-normal">Register Here</h1>
                    <label htmlFor="inputUsername">Username</label>
                    <input
                        onChange={this.handleFieldChange}
                        type="username"
                        id="username"
                        placeholder={`username`}
                        required=""
                        autoFocus=""
                    />
                     <label htmlFor="inputPassword">Password</label>
                     <input
                        onChange={this.handleFieldChange}
                        type="password"
                        id="password"
                        placeholder={'password'}
                        required=""
                        />

                    <label htmlFor="inputfirstName">First Name</label>
                     <input
                        onChange={this.handleFieldChange}
                        type="firstName"
                        id="firstName"
                        placeholder={'first name'}
                        required=""
                        />
                     <label htmlFor="inputlastName">Last Name</label>
                     <input
                        onChange={this.handleFieldChange}
                        type="lastName"
                        id="lastName"
                        placeholder={'last name'}
                        required=""
                        />

                <button type="submit"
                onClick={this.handleRegister}> Register </button>







                </form >


                </div>

                </div>




        )
    }




}