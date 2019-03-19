import React, { Component } from "react"
import ReplyToMessage from "./ReplytoMessageInConvo";

export default class PrivateConversations extends Component {


    render() {
        const SentBy = this.props.messages.find(a => a.userId === parseInt(this.props.match.params.userId))
        console.log(SentBy)

        const currentUserId = parseInt(sessionStorage.getItem("credentials"))
        return(
            <div>
                {this.props.messages.filter(message => ((message.userSentToId === currentUserId && message.userId === SentBy.userId) || (message.userId === currentUserId && message.userSentToId === SentBy.userId)) ).map(message =>
                    <div>
                        {message.message}
                        {" "}Sent By: {message.user.firstName}


                    </div>

                )}
            <ReplyToMessage  {...this.props} SentBy={SentBy}  currentUserId={currentUserId}/>


            </div>
        )
    }
}