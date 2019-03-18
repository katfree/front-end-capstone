import React, { Component } from "react"
import { Link } from "react-router-dom";



export default class Messages extends Component {


    
    render() {
        const currentUserId = parseInt(sessionStorage.getItem("credentials"))
        console.log(currentUserId)


        return (
            <div >

                {   this.props.messages.filter(message => message.userSentToId === currentUserId).map(
                    message =>
                    <div>
                    <Link className="" to={`/messages/${message.userId}`}>Got to conversation With: {message.user.firstName}</Link>
                    </div>
                )


                }
            </div >
        )
    }
}