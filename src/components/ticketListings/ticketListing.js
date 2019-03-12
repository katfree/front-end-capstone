import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./ticketListing.css"
import CreateNewTicketListing from "./CreateNewTicketListing";




export default class TicketListings extends Component {



    render() {
        const array = this.props.gameSchedule.dates || []
        console.log(this.props.teams.teams)
        return (
            <React.Fragment>
                <div>
                    {console.log(array)}
                </div>
                <CreateNewTicketListing {...this.props} AddNewTicketListing={this.props.AddNewTicketListing} />

                <div className="ticketListingContainer  " >


                    {
                        this.props.ticketListings.map(listing =>
                            <section key={listing.id} className="ticketListingCard card-body shadow">
                                <h3 className="card-title">{listing.listingHeader}</h3>
                                <p className="list-group-item">Opponent: {listing.opponent}</p>
                                <p className="list-group-item">Date of Game:{" "} {listing.dateofGame}</p>
                                <p className="list-group-item">Section:{" "}{listing.section}{" "}Price:{" "} ${listing.price}</p>
                                <p className="card-text"> Description: {listing.description}</p>


                            </section>


                        )
                    }


                </div>



            </React.Fragment>
        )

    }

}