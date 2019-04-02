import React, { Component } from "react"
import {
    Card, CardTitle, CardText, CardColumns,

} from 'reactstrap';
import { Link } from "react-router-dom";
import "./ticketListing.css"
import NewMessage from "../messages/CreateNewMessage";
import moment from "moment"



export default class TicketCard extends Component {


    render() {
        const activeUserId = parseInt(sessionStorage.getItem("credentials"))
        return (
            <React.Fragment>
                <h1 className="listingHeader">All Listings</h1>

            <CardColumns className="listingcard">



                    {
                        this.props.ticketListings.filter(listing => listing.userId !== activeUserId && listing.sold === false && listing.dateofGame >= moment().format("YYYY-MM-DD")).map(listing =>
                            <Card key={listing.id} className="ticketListingCard shawdow ">

                                <CardTitle className="listingHeader">{listing.listingHeader}</CardTitle>
                                <CardText>Opponent: {listing.opponent}</CardText>
                                <CardText>Date of Game:{" "} {listing.dateofGame}</CardText>
                                <CardText>Section:{" "}{listing.section}{" "}Price:{" "} ${listing.price}</CardText>
                                <CardText> Description: {listing.description}</CardText>
                                <NewMessage {...this.props} listing={listing}  />


                            </Card>


                        )
                    }


            </CardColumns>
            </React.Fragment>
        )
    }
}