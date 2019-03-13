import React, { Component } from "react"
import { Route } from "react-router-dom"
import TicketListingsManager from "../modules/TicketListingsManager";
import HockeyapiManager from "../modules/HockeyapiManager";
import Profile from "./profiles/profile";
import TicketListingsPage from "./ticketListings/ticketListing";

class ApplicationViews extends Component {
  state = {
    ticketListings: [],
    gameSchedule: [],
    teams: []
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



  componentDidMount() {

    const newState = {}

    TicketListingsManager.getAll()
      .then(ticketListings => newState.ticketListings = ticketListings)

      HockeyapiManager.getAllGames()
  .then( gameSchedule => newState.gameSchedule = gameSchedule)

  HockeyapiManager.getAllTeams()
  .then(teams => newState.teams = teams)

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





}} />




      </React.Fragment>

    )
  }


}

export default ApplicationViews
