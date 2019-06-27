import React, { Component } from "react"
import CreateNewTicketListing from "./CreateNewTicketListing";
import TicketCard from "./ticketListingCard";
import SortTicketListings from "./SortTicketListings";
import { Button, Card, CardTitle, CardText,CardColumns, Alert, CardHeader, Row} from 'reactstrap';
import "./ticketListing.css"
import NewMessage from "../messages/CreateNewMessage";
import HockeyapiManager from "../../modules/HockeyapiManager";




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
                <SortTicketListings  {...this.props} toShowState={this.toShowState} handleLevelFieldChange={this.handleLevelFieldChange} handleFieldChange={this.handleFieldChange} ticketListings={this.props.ticketListings} />


                {this.state.toShow === true && <Button className="listingpagebutton" onClick={this.toShowStateFalse}>Show All Listings</Button>}

                {this.state.toShow ?

                (this.state.level === "" ?
                (dateFilter.length === 0 ? <div><Alert>There are no Tickets for this Date!</Alert></div> :(
                    <Row>
                    <CardColumns className="listingcard">
                    {
                    dateFilter.map(listing =>

                            <Card key={listing.id} className="ticketListingCard shawdow ">
                                 <CardTitle className="listingHeader">{listing.listingHeader}</CardTitle>
                                <CardText>Opponent: {listing.opponent}</CardText>
                                <CardText>Date of Game:{" "} {listing.dateofGame}</CardText>
                                <CardText>Section:{" "}{listing.section}{" "}Price:{" "} ${listing.price}</CardText>
                                <CardText> Description: {listing.description}</CardText>
                                <NewMessage {...this.props} listing={listing} />


                                    </Card>

                      ) }
                      </CardColumns>
                      </Row>
                      )

                        ):
                        (dateANDlevelFilter.length === 0 ? <div><Alert>There are no Tickets for this Date and level!</Alert></div> :(
                         <CardColumns className="listingcard">
                            {
                                dateANDlevelFilter.map(listing =>
                                    <Card key={listing.id} className="ticketListingCard shawdow ">

                                        <CardTitle className="listingHeader">{listing.listingHeader}</CardTitle>
                                        <CardText>Opponent: {listing.opponent}</CardText>
                                        <CardText>Date of Game:{" "} {listing.dateofGame}</CardText>
                                        <CardText>Section:{" "}{listing.section}{" "}Price:{" "} ${listing.price}</CardText>
                                        <CardText> Description: {listing.description}</CardText>
                                        <NewMessage {...this.props} listing={listing} />


                                    </Card>

                                )

                            }
                        </CardColumns>
                            )

                        )
                )
                        : <TicketCard {...this.props} ticketListings={this.props.ticketListings} />

                }




            </React.Fragment>
        )

    }

}