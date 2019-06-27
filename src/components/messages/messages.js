import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./message.css"



export default class Messages extends Component {



    render() {
        const currentUserId = parseInt(sessionStorage.getItem("credentials"))
        // console.log(currentUserId)


        return (
            <div className="messageCard">
                <h1 className="inbox">Inbox</h1>

                {
                    this.props.messages.filter(message => message.userSentToId === currentUserId).filter((message, index, self) =>
                        index === self.findIndex((t) => (
                            t.userId === message.userId
                        ))
                    ).map(
                        message =>

                            <div key={message.userId} className="linkcontainer">
                                <Link className="messageLink" to={`/messages/${message.userId}`}>Go to Conversation With: {message.user.username}</Link>
                            </div>
                    )


                }
            </div >
        )
    }
}