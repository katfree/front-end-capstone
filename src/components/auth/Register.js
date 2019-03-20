
import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
            <Form className="RegistrationForm" >
                <h1 className="">Register Here</h1>
                <FormGroup>
                    <Label htmlFor="inputUsername">Username</Label>
                    <Input
                        onChange={this.handleFieldChange}
                        type="username"
                        id="username"
                        placeholder={`username`}
                        required=""
                        autoFocus=""
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="inputPassword">Password</Label>
                    <Input
                        onChange={this.handleFieldChange}
                        type="password"
                        id="password"
                        placeholder={'password'}
                        required=""
                    />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="inputfirstName">First Name</Label>
                    <Input
                        onChange={this.handleFieldChange}
                        type="firstName"
                        id="firstName"
                        placeholder={'first name'}
                        required=""
                    />

                </FormGroup>

                <FormGroup>
                    <Label htmlFor="inputlastName">Last Name</Label>
                    <Input
                        onChange={this.handleFieldChange}
                        type="lastName"
                        id="lastName"
                        placeholder={'last name'}
                        required=""
                    />

                </FormGroup>

                <Button color="success" type="submit"
                    onClick={this.handleRegister}> Register </Button>







            </Form>




        )
    }




}