import React, { Component } from "react"



export default class Messages extends Component {


    
    render() {
        const currentUserId = parseInt(sessionStorage.getItem("credentials"))
        console.log(currentUserId)

        return (
            <div>
                {this.props.messages.filter(message => message.userId === currentUserId || message.userSentToId === currentUserId).map(message =>
                    <div>
                        {message.message}
                        <p>Sent By: {message.user.firstName}</p>
                    </div>

                )}
            </div>
        )
    }
}