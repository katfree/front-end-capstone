import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Modal from 'react-responsive-modal';



export default class ReplyToMessage extends Component {

    state = {
        message: "",
        userId: "",
        userSentToId: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }




    SendNewMessage = evt => {
        evt.preventDefault()

        const message = {
            message: this.state.message,
            userId: this.props.currentUserId,
            userSentToId: this.props.SentBy.userId
        }

        this.props.SendNewMessage(message)
    }







    render() {
        return (
            <React.Fragment>
                <Form>
                <FormGroup>
                    
                    <Input type="text"
                        placeholder="Message"
                        aria-describedby="basic-addon1"
                        required
                        className="Form-control"
                        onChange={this.handleFieldChange}
                        id="message">
                    </Input>
                    </FormGroup>



                    <Button color="warning" type="submit"
                    onClick={this.SendNewMessage} >Send Message</Button>

             </Form>
            </React.Fragment>
        )
    }
}