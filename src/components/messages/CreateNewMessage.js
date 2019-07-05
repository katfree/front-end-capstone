import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Modal from 'react-responsive-modal';
import moment from 'moment'
// import { Link } from "react-router-dom";


export default class NewMessage extends Component {
    state = {
        message: "",
        userId: "",
        userSentToId: "",
        timestamp: "",
        open: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };


    SendNewMessage = evt => {
        evt.preventDefault()

        const message = {
            message: this.state.message,
            userId: parseInt(sessionStorage.getItem("credentials")),
            userSentToId: this.props.listing.userId,
            timestamp: moment().format('LLL')
        }

        this.props.SendNewMessage(message)
        .then(() => this.NewConversation())
        .then(() => this.onCloseModal())
    }

    NewConversation = () => {
        const Conversation = {
            userId: parseInt(sessionStorage.getItem("credentials")),
            userSentToId: this.props.listing.userId,

        }

        this.props.NewConversations(Conversation)
    }





    render() {
        const { open } = this.state;
        console.log(sessionStorage.getItem("credentials"))
        return (
            <React.Fragment>
            <Button className="messageSellerBtn" onClick={this.onOpenModal}>Message Seller: {this.props.listing.user.username} </Button>
            <Modal open={open} onClose={this.onCloseModal} center>
            <Form>
                <FormGroup>
                    <Label
                        id="basic-addon1"
                        htmlFor="message">
                        Message Seller
                        </Label>
                    <Input type="text"
                        aria-describedby="basic-addon1"
                        required
                        className="Form-control messageModa"
                        onChange={this.handleFieldChange}
                        id="message"

                        >
                    </Input>
                    </FormGroup>



                    <Button color="warning" type="submit"
                    onClick={this.SendNewMessage} >Send Message</Button>

             </Form>

            </Modal>

            </React.Fragment>
        )
    }
}