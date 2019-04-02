import React, { Component } from "react"
import ReplyToMessage from "./ReplytoMessageInConvo";
import "./message.css"

export default class PrivateConversations extends Component {


    render() {
        const SentBy = this.props.messages.find(a => a.userId === parseInt(this.props.match.params.userId))
        console.log(SentBy)

        const currentUserId = parseInt(sessionStorage.getItem("credentials"))
        return(
            <div className="privatemessage">
                {this.props.messages.filter(message => ((message.userSentToId === currentUserId && message.userId === SentBy.userId) || (message.userId === currentUserId && message.userSentToId === SentBy.userId)) ).map(message =>
                    <div >
                        <h3 className="messages" >{message.message}</h3> <p className="messages"> Sent By: {message.user.firstName} on {message.timestamp}</p>




                    </div>

                )}
            <ReplyToMessage  {...this.props} SentBy={SentBy}  currentUserId={currentUserId}/>


            </div>
        )
    }
}