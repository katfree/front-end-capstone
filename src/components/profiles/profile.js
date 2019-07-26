import React, { Component } from "react"

import {
    Card, Button, CardTitle, CardText, CardBody, CardFooter, CardImg

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
                    <div className="listingcard">


                        {
                            this.props.ticketListings.filter(listing => listing.userId === activeUserId).map(listing =>
                                <div className="cardConatainer">
                                <Card key={listing.id} className="ticketListingCard shawdow ">

                                    <CardTitle className="listingHeader"><strong>{listing.listingHeader}</strong></CardTitle>
                                    <CardImg top width="100%" src={listing.listingphotoURL} alt="Card image cap" />
                                    <CardBody>
                                    <CardText><strong>Opponent:</strong> {listing.opponent}</CardText>
                                    <CardText><strong>Date of Game:</strong>{" "} {listing.dateofGame}</CardText>
                                    <CardText><strong>Section:</strong>{" "}{listing.section} <strong>  Price:</strong> {" "} ${listing.price}</CardText>
                                    <CardText><strong>Description: </strong>  {listing.description}</CardText>

                                    <CheckBox  {...this.props} listing={listing} />
                                    </CardBody>
                                    <CardFooter className="text-center">
                                    <EditListing {...this.props} CloseModal={this.onCloseModal} EditListing={this.props.EditListing} listing={listing} />

                                    <Button color="danger" onClick={() => this.props.DeleteListing(listing.id)} >Delete</Button>
                                    </CardFooter>


                                </Card>
                                </div>

                            )
                        }


                    </div>







                </section>

                {/* <section>
                    <h1>Tickets Bought</h1>



                </section> */}
            </React.Fragment>
        )
    }
}