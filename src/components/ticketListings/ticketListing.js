import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"



export default class TicketListings extends Component {
    render() {
    return (
        <div>
             {
                 this.props.ticketListings.map( listing =>
                    <section key ={listing.id}>
                    <h3>{listing.listingHeader}</h3>
                    <p>Opponent: {listing.opponent} {" "} Date of Game:{" "} {listing.dateOfGame}</p>
                    <p>Section:{" "}{listing.section}{" "}Price:{" "} ${listing.price}</p>
                    <p>{listing.description}</p>

                    </section>

                 )
             }


        </div>
    )

    }

}