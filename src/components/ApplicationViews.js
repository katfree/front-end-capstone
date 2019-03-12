import React, { Component } from "react"
import { Route } from "react-router-dom"
import TicketListings from "./ticketListings/ticketListing";
import TicketListingsManager from "../modules/TicketListingsManager";
import HockeyapiManager from "../modules/HockeyapiManager";

class ApplicationViews extends Component {
  state = {
    ticketListings: [],
    gameSchedule: [],
    teams: []
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

// ShowGameSchedule = () => {
//   return HockeyapiManager.getAll()
//   .then( gameSchedule => this.setState({gameSchedule: gameSchedule}))
// }



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
          return <TicketListings {...this.props} {...props}
          ticketListings={this.state.ticketListings}
          AddNewTicketListing={this.AddNewTicketListing}
          ShowGameSchedule={this.ShowGameSchedule}
          gameSchedule={this.state.gameSchedule}
          teams={this.state.teams}

          />



        }} />




      </React.Fragment>

    )
  }


}

export default ApplicationViews
