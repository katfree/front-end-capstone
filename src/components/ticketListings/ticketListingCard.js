import React, { Component } from "react"
import { Card, CardTitle, CardText,  CardBody, CardFooter, CardImg

} from 'reactstrap';
import "./ticketListing.css"
import NewMessage from "../messages/CreateNewMessage";
import moment from "moment"



export default class TicketCard extends Component {


    render() {
        // const activeUserId = parseInt(sessionStorage.getItem("credentials"))
        console.log(this.props.ticketListings)
        //listing.userId !== activeUserId &&
        return (
            <React.Fragment>
            <div className="listingcard">



                    {
                        this.props.ticketListings.filter(listing => listing.sold === false && listing.dateofGame >= moment().format("YYYY-MM-DD")).map(listing =>
                            <div className="cardConatainer">
                            <Card key={listing.id} className="ticketListingCard">
                                 <CardTitle className="text-center"><strong>{listing.listingHeader}</strong></CardTitle>
                                 <CardImg top width="100%" src="https://via.placeholder.com/220x120" alt="Card image cap" />
                                <CardBody>

                                <CardText><strong>Opponent:</strong> {listing.opponent}</CardText>
                                <CardText><strong>Date of Game:</strong>{" "} {listing.dateofGame}</CardText>
                                <CardText><strong>Section:</strong>{" "}{listing.section} <strong>  Price:</strong> {" "} ${listing.price}</CardText>
                                <CardText><strong>Description: </strong>  {listing.description}</CardText>
                                </CardBody>
                                <CardFooter className="text-center"><NewMessage {...this.props} listing={listing}  /></CardFooter>
                            </Card>
                            </div>


                        )


                    }


            </div>

            </React.Fragment>
        )
    }
}