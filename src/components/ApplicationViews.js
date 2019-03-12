import React, { Component } from "react"
import { Route } from "react-router-dom"
import TicketListings from "./ticketListings/ticketListing";
import TicketListingsManager from "../modules/TicketListingsManager";
class ApplicationViews extends Component {
  state = {
    ticketListings: []
  }

  AddNewTicketListing = listing => {
    return TicketListingsManager.CreateNewTicketListing(listing)
        .then(() => TicketListingsManager.getAll())
        .then(listings =>
            this.setState({
                listings: listings
            })
        )
}




  componentDidMount() {

    const newState = {}

    TicketListingsManager.getAll()
      .then(ticketListings => newState.ticketListings = ticketListings)

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
          />



        }} />




      </React.Fragment>

    )
  }


}

export default ApplicationViews
