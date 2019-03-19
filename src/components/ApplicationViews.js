import React, { Component } from "react"
import { Route } from "react-router-dom"
import TicketListingsManager from "../modules/TicketListingsManager";
import HockeyapiManager from "../modules/HockeyapiManager";
import Profile from "./profiles/profile";
import TicketListingsPage from "./ticketListings/ticketListing";
import Messages from "./messages/messages";
import MessageManager from "../modules/MessageManager";
import PrivateConversations from "./messages/PrivateConversations";
import UserManager from "../modules/UserManager";

class ApplicationViews extends Component {
  state = {
    ticketListings: [],
    gameSchedule: [],
    teams: [],
    messages: [],
    conversations: [],
    users: []
  }

  DeleteListing = id => {
    return TicketListingsManager.deleteTicketListing(id)
      .then(() => TicketListingsManager.getAll())
      .then(listings =>
        this.setState({
          ticketListings: listings
        })
      )
  }

  AddNewTicketListing = listing => {
    return TicketListingsManager.CreateNewTicketListing(listing)
      .then(() => TicketListingsManager.getAll())
      .then(listings =>
        this.setState({
          ticketListings: listings
        })
      )
  }

  EditListing = (editedListingObject, id) => {
    return TicketListingsManager.EditListing(editedListingObject, id)
      .then(() => TicketListingsManager.getAll())
      .then(listings => this.setState({ ticketListings: listings })
      )
  }

  SendNewMessage = message => {
    return MessageManager.CreateNewMessage(message)
      .then(() => MessageManager.getAll())
      .then(messages => this.setState({ messages: messages }))
  }

  NewConversations = conversation => {
    return MessageManager.AddNewConversation(conversation)
      .then(() => MessageManager.getAllConvos())
      .then(conversations => this.setState({ conversations: conversations }))

  }



  componentDidMount() {
    console.log("componentdidMount")

    const newState = {}

    UserManager.getAll()
      .then(users => newState.users = users)

      .then(() => TicketListingsManager.getAll())
      .then(ticketListings => newState.ticketListings = ticketListings)

      .then(() => HockeyapiManager.getAllGames())
      .then(gameSchedule => newState.gameSchedule = gameSchedule)

      .then(() => HockeyapiManager.getAllTeams())
      .then(teams => newState.teams = teams)

      .then(() => MessageManager.getAll())
      .then(messages => newState.messages = messages)

      .then(() => MessageManager.getAllConvos())
      .then(conversations => newState.conversations = conversations)

      .then(() => this.setState(newState))

  }



  render() {
    console.log(this.props.activeUser)

    return (

      <React.Fragment>

        <Route exact path="/" render={(props) => {
          return <TicketListingsPage {...this.props} {...props}
            ticketListings={this.state.ticketListings}
            AddNewTicketListing={this.AddNewTicketListing}
            gameSchedule={this.state.gameSchedule}
            teams={this.state.teams}
            SendNewMessage={this.SendNewMessage}
            NewConversations={this.NewConversations}

          />



        }} />

        <Route exact path="/profile" render={(props) => {
          return <Profile {...this.props} {...props}
            ticketListings={this.state.ticketListings}
            EditListing={this.EditListing}
            gameSchedule={this.state.gameSchedule}
            teams={this.state.teams}
            DeleteListing={this.DeleteListing}
            AddNewTicketListing={this.AddNewTicketListing}


          />




        }} />

        <Route exact path="/messages" render={(props) => {
          return <Messages {...this.props} {...props}
            messages={this.state.messages}
            conversations={this.state.conversations}
            users={this.state.users}



          />



        }} />

        <Route path="/messages/:userId(\d+)" render={(props) => {
          return <PrivateConversations {...this.props} {...props}
            messages={this.state.messages}
            ticketListings={this.state.ticketListings}
            conversations={this.state.conversations}
            users={this.state.users}
            SendNewMessage={this.SendNewMessage}


          />

        }}
        />






      </React.Fragment>

    )
  }


}

export default ApplicationViews
