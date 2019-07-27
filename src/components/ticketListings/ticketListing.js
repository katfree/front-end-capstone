import React, { Component } from "react"
import CreateNewTicketListing from "./CreateNewTicketListing";
import TicketCard from "./ticketListingCard";
import SortTicketListings from "./SortTicketListings";
import { Button, Card, CardTitle, CardText,CardColumns, Alert, CardBody, CardFooter, CardImg} from 'reactstrap';
import "./ticketListing.css"
import NewMessage from "../messages/CreateNewMessage";




export default class TicketListingsPage extends Component {
    state = {
        toShow: false,
        level: "",
        dateofGame: "",
    }
    handleFieldChange = evt => {
        // console.log(evt.target.value)
        this.setState({ dateofGame: evt.target.value })
    }

    handleLevelFieldChange = evt => {
        // console.log(evt.target.value)
        this.setState({ level: evt.target.value })
    }

    toShowState = () => {

        this.setState({ toShow: true })
    }

    toShowStateFalse = () => {
        this.setState({ toShow: false })
    }
    render() {
        // console.log(this.state.dateofGame)
        console.log(this.props.ticketListings)

        // const activeUserId = parseInt(sessionStorage.getItem("credentials"))


        const dateFilter =  this.props.ticketListings.filter(listing => (listing.dateofGame === this.state.dateofGame  && listing.sold === false))
        const dateANDlevelFilter =  this.props.ticketListings.filter(listing => (listing.dateofGame === this.state.dateofGame && listing.sold === false && listing.level === this.state.level))
        return (
            <React.Fragment>
                  
                <CreateNewTicketListing {...this.props} AddNewTicketListing={this.props.AddNewTicketListing} />

                <div className="sortdiv">
                <SortTicketListings  {...this.props} toShow={this.state.toShow} toShowState={this.toShowState} handleLevelFieldChange={this.handleLevelFieldChange} handleFieldChange={this.handleFieldChange} ticketListings={this.props.ticketListings} />
                </div>

                {this.state.toShow === true && <Button className="listingpagebutton" onClick={this.toShowStateFalse}>Show All Listings</Button>}

                {this.state.toShow ?

                (this.state.level === "" ?
                (dateFilter.length === 0 ? <div><Alert>There are no Tickets for this Date!</Alert></div> :(
                    <div className="listingcard">

                    {
                    dateFilter.map(listing =>
                        <div className="cardConatainer">
                            <Card key={listing.id} className="ticketListingCard">
                                 <CardTitle className="text-center">{listing.listingHeader}</CardTitle>
                                 <CardImg top width="100%" src={listing.listingphotoURL} alt="Card image cap" />
                                <CardBody>

                                <CardText>Opponent: {listing.opponent}</CardText>
                                <CardText>Date of Game:{" "} {listing.dateofGame}</CardText>
                                <CardText>Section:{" "}{listing.section}{" "} Price:{" "} ${listing.price}</CardText>
                                <CardText> Description: {listing.description}</CardText>
                                </CardBody>
                                <CardFooter className="text-center"><NewMessage {...this.props} listing={listing}  /></CardFooter>
                            </Card>
                                    </div>
                      ) }

                      </div>
                      )

                        ):
                        (dateANDlevelFilter.length === 0 ? <div><Alert>There are no Tickets for this Date and level!</Alert></div> :(
                            <div className="listingcard">
                            {
                                dateANDlevelFilter.map(listing =>
                                    <div className="cardConatainer">
                            <Card key={listing.id} className="ticketListingCard">
                                 <CardTitle className="text-center">{listing.listingHeader}</CardTitle>
                                 <CardImg top width="100%" src={listing.listingphotoURL} alt="Card image cap" />
                                <CardBody>

                                <CardText>Opponent: {listing.opponent}</CardText>
                                <CardText>Date of Game:{" "} {listing.dateofGame}</CardText>
                                <CardText>Section:{" "}{listing.section}{" "} Price:{" "} ${listing.price}</CardText>
                                <CardText> Description: {listing.description}</CardText>
                                </CardBody>
                                <CardFooter className="text-center"><NewMessage {...this.props} listing={listing}  /></CardFooter>
                            </Card>
                                    </div>

                                )

                            }
                        </div>
                            )

                        )
                )
                        : <TicketCard {...this.props} ticketListings={this.props.ticketListings} />

                }




            </React.Fragment>
        )

    }

}