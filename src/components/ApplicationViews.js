import React, { Component } from "react"
import { Route } from "react-router-dom"
import TicketListings from "./ticketListings/ticketListing";
import TicketListingsManager from "../modules/TicketListingsManager";
class ApplicationViews extends Component {
  state = {
    ticketListings: []
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
          />



        }} />




      </React.Fragment>

    )
  }


}

export default ApplicationViews
