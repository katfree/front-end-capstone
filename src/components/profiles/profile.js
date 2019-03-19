import React, { Component } from "react"

import {
    Card, Button, CardTitle, CardText, CardColumns,

} from 'reactstrap';
import EditListing from "./EditListing";
import CreateNewTicketListing from "../ticketListings/CreateNewTicketListing";

import CheckBox from "./checkbox";




export default class Profile extends Component {

    render() {


        const activeUserId = parseInt(sessionStorage.getItem("credentials"))

        return (

            <React.Fragment>

                <section>
                    <CreateNewTicketListing {...this.props} AddNewTicketListing={this.props.AddNewTicketListing} />


                    <h1 className="profileHeader">My Tickets Listed/Sold</h1>
                    <CardColumns>


                        {
                            this.props.ticketListings.filter(listing => listing.userId === activeUserId).map(listing =>
                                <Card key={listing.id} className="ticketListingCard shawdow ">

                                    <CardTitle className="listingHeader">{listing.listingHeader}</CardTitle>
                                    <CardText>Opponent: {listing.opponent}</CardText>
                                    <CardText>Date of Game:{" "} {listing.dateofGame}</CardText>
                                    <CardText>Section:{" "}{listing.section}{" "}Price:{" "} ${listing.price}</CardText>
                                    <CardText> Description: {listing.description}</CardText>

                                    <CheckBox  {...this.props} listing={listing} />

                                    <EditListing {...this.props} CloseModal={this.onCloseModal} EditListing={this.props.EditListing} listing={listing} />





                                    <Button color="danger" onClick={() => this.props.DeleteListing(listing.id)} >Delete</Button>



                                </Card>


                            )
                        }


                    </CardColumns>







                </section>

                {/* <section>
                    <h1>Tickets Bought</h1>



                </section> */}
            </React.Fragment>
        )
    }
}