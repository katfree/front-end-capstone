import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./ticketListing.css"
import CreateNewTicketListing from "./CreateNewTicketListing";



export default class TicketListings extends Component {



    render() {
    return (
        <React.Fragment>
            <CreateNewTicketListing {...this.props}  AddNewTicketListing={this.AddNewTicketListing}/>


        <div  className="ticketListingContainer card shadow" >

             {
                 this.props.ticketListings.map( listing =>
                    <section key ={listing.id} className="ticketListingCard card-body">
                    <h3 className ="card-title">{listing.listingHeader}</h3>
                    <p className="list-group-item">Opponent: {listing.opponent}</p>
                    <p className="list-group-item">Date of Game:{" "} {listing.dateOfGame}</p>
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