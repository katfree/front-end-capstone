import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import EditListing from "./EditListing";



export default class Profile extends Component {




    render() {
       
        const activeUserId = parseInt(sessionStorage.getItem("credentials"))
        return (
            <React.Fragment>
                <section>
                    <h1>My Tickets Listed/Sold</h1>
                    <div className="ticketListingContainer  " >


                        {
                            this.props.ticketListings.filter(listing => listing.userId === activeUserId).map(listing =>
                                <section key={listing.id} className="ticketListingCard card-body shadow">
                                    <h3 className="card-title">{listing.listingHeader}</h3>
                                    <p className="list-group-item">Opponent: {listing.opponent}</p>
                                    <p className="list-group-item">Date of Game:{" "} {listing.dateofGame}</p>
                                    <p className="list-group-item">Section:{" "}{listing.section}{" "}Price:{" "} ${listing.price}</p>
                                    <p className="card-text"> Description: {listing.description}</p>


                                        <EditListing {...this.props}  CloseModal={this.onCloseModal} EditListing={this.props.EditListing} listing={listing} />




                                    <button>Delete</button>

                                </section>


                            )
                        }


                    </div>











                </section>

                <section>
                    <h1>Tickets Bought</h1>



                </section>
            </React.Fragment>
        )
    }
}