import React, { Component } from "react"
import {
  Col,  Card, CardTitle, CardText, CardColumns, Row, CardBody, CardFooter, CardImg, Container

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

            <CardColumns className="listingcard">



                    {
                        this.props.ticketListings.filter(listing => listing.sold === false && listing.dateofGame >= moment().format("YYYY-MM-DD")).map(listing =>
                            <Card key={listing.id} className="ticketListingCard">
                                 <CardTitle className="text-center">{listing.listingHeader}</CardTitle>
                                 <CardImg top width="100%" src="https://via.placeholder.com/220x120" alt="Card image cap" />
                                <CardBody>

                                <CardText>Opponent: {listing.opponent}</CardText>
                                <CardText>Date of Game:{" "} {listing.dateofGame}</CardText>
                                <CardText>Section:{" "}{listing.section}{" "} Price:{" "} ${listing.price}</CardText>
                                <CardText> Description: {listing.description}</CardText>
                                {/* <NewMessage {...this.props} listing={listing}  /> */}
                                </CardBody>
                                <CardFooter className="text-center"><NewMessage {...this.props} listing={listing}  /></CardFooter>
                            </Card>


                        )


                    }


            </CardColumns>

            </React.Fragment>
        )
    }
}