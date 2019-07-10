import React, { Component } from "react"
import { Button, Form, FormGroup, Input, } from 'reactstrap';
import moment from 'moment'




export default class ReplyToMessage extends Component {

    state = {
        message: "",
        userId: "",
        userSentToId: "",
        timestamp: "",
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
            userSentToId: this.props.SentBy.userId,
            timestamp: moment().format('LLL')
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
                        className="Form-control repltToMsgInput "
                        onChange={this.handleFieldChange}
                        id="message">
                    </Input>
                </FormGroup>



                    <Button className="replytoNewMsgBtn" type="submit"
                    onClick={this.SendNewMessage} >Send Message</Button>

             </Form>
            </React.Fragment>
        )
    }
}