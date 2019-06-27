import React, { Component } from "react"
import {
    Card, CardTitle, CardText, CardColumns, Row

} from 'reactstrap';
import "./ticketListing.css"
import NewMessage from "../messages/CreateNewMessage";
import moment from "moment"



export default class TicketCard extends Component {


    render() {
        const activeUserId = parseInt(sessionStorage.getItem("credentials"))
        console.log(this.props.ticketListings)
        //listing.userId !== activeUserId &&
        return (
            <React.Fragment>
                {/* <h1 className="listingHeader">All Listings</h1> */}
            <Row>
            <CardColumns className="listingcard">



                    {
                        this.props.ticketListings.filter(listing => listing.sold === false && listing.dateofGame >= moment().format("YYYY-MM-DD")).map(listing =>
                            <Card key={listing.id} className="ticketListingCard shawdow ">

                                <CardTitle className="listingHeader">{listing.listingHeader}</CardTitle>
                                <CardText>Opponent: {listing.opponent}</CardText>
                                <CardText>Date of Game:{" "} {listing.dateofGame}</CardText>
                                <CardText>Section:{" "}{listing.section}{" "} Price:{" "} ${listing.price}</CardText>
                                <CardText> Description: {listing.description}</CardText>
                                <NewMessage {...this.props} listing={listing}  />


                            </Card>


                        )


                    }


            </CardColumns>
            </Row>
            </React.Fragment>
        )
    }
}