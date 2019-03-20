import React, { Component } from "react"
import CreateNewTicketListing from "./CreateNewTicketListing";
import TicketCard from "./ticketListingCard";
import SortTicketListings from "./SortTicketListings";
import { Button, Card, CardTitle, CardText, } from 'reactstrap';
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
        console.log(evt.target.value)
        this.setState({ dateofGame: evt.target.value })
    }

    handleLevelFieldChange = evt => {
        console.log(evt.target.value)
        this.setState({ level: evt.target.value })
    }

    toShowState = () => {

        this.setState({ toShow: true })
    }

    toShowStateFalse = () => {
        this.setState({ toShow: false })
    }
    render() {
        console.log(this.state.dateofGame)

        const activeUserId = parseInt(sessionStorage.getItem("credentials"))
        console.log(this.props.gameSchedule)
        console.log(HockeyapiManager.getAllTeams())


        return (
            <React.Fragment>
                <CreateNewTicketListing {...this.props} AddNewTicketListing={this.props.AddNewTicketListing} />
                <Button className="listingpagebutton" onClick={this.toShowStateFalse}>Show All Listings</Button>
                <SortTicketListings  {...this.props} toShowState={this.toShowState} handleLevelFieldChange={this.handleLevelFieldChange} handleFieldChange={this.handleFieldChange} ticketListings={this.props.ticketListings} />
                {

                    this.state.toShow ?


                        (this.state.level === "" ? this.props.ticketListings.filter(listing => (listing.dateofGame === this.state.dateofGame && listing.userId !== activeUserId && listing.sold === false)).map(listing =>
                            <Card key={listing.id} className="ticketListingCard shawdow ">

                                <CardTitle className="listingHeader">{listing.listingHeader}</CardTitle>
                                <CardText>Opponent: {listing.opponent}</CardText>
                                <CardText>Date of Game:{" "} {listing.dateofGame}</CardText>
                                <CardText>Section:{" "}{listing.section}{" "}Price:{" "} ${listing.price}</CardText>
                                <CardText> Description: {listing.description}</CardText>
                                <NewMessage {...this.props} listing={listing} />


                            </Card>
                        ) : (
                                this.props.ticketListings.filter(listing => (listing.dateofGame === this.state.dateofGame && listing.userId !== activeUserId && listing.sold === false && listing.level === this.state.level)).map(listing =>
                                    <Card key={listing.id} className="ticketListingCard shawdow ">

                                        <CardTitle className="listingHeader">{listing.listingHeader}</CardTitle>
                                        <CardText>Opponent: {listing.opponent}</CardText>
                                        <CardText>Date of Game:{" "} {listing.dateofGame}</CardText>
                                        <CardText>Section:{" "}{listing.section}{" "}Price:{" "} ${listing.price}</CardText>
                                        <CardText> Description: {listing.description}</CardText>
                                        <NewMessage {...this.props} listing={listing} />


                                    </Card>
                                )
                            )
                        )

                        : <TicketCard {...this.props} ticketListings={this.props.ticketListings} />

                }



            </React.Fragment>
        )

    }

}