import React, { Component } from "react"
import {
    Card, CardTitle, CardText, CardColumns,

} from 'reactstrap';
import { Link } from "react-router-dom";
import "./ticketListing.css"
import NewMessage from "../messages/CreateNewMessage";



export default class TicketCard extends Component {

    render() {
        const activeUserId = parseInt(sessionStorage.getItem("credentials"))
        return (
            <CardColumns>


                    {
                        this.props.ticketListings.filter(listing => listing.userId !== activeUserId).map(listing =>
                            <Card key={listing.id} className="ticketListingCard shawdow ">

                                <CardTitle className="listingHeader">{listing.listingHeader}</CardTitle>
                                <CardText>Opponent: {listing.opponent}</CardText>
                                <CardText>Date of Game:{" "} {listing.dateofGame}</CardText>
                                <CardText>Section:{" "}{listing.section}{" "}Price:{" "} ${listing.price}</CardText>
                                <CardText> Description: {listing.description}</CardText>
                                {/* <Link className="toMessages text-info" to={`/messages`}>Message Seller: {listing.user.username} </Link> */}
                                <NewMessage {...this.props} listing={listing}  />


                            </Card>


                        )
                    }


            </CardColumns>
        )
    }
}