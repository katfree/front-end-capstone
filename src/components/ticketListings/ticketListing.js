import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./ticketListing.css"
import CreateNewTicketListing from "./CreateNewTicketListing";
import TicketCard from "./ticketListingCard";
import SortTicketListings from "./SortTicketListings";




export default class TicketListingsPage extends Component {
    state = {
       toShow: false,
        level: "",
        dateofGame: "",
    }
    handleFieldChange = evt => {
        console.log(evt.target.value)
        this.setState({dateofGame: evt.target.value  })
    }

    toShowState = () =>  {

        this.setState({toShow: !this.state.toShow})
    }
    render() {
        console.log(this.state.dateofGame)

        const activeUserId = parseInt(sessionStorage.getItem("credentials"))


        return (
            <React.Fragment>
<CreateNewTicketListing {...this.props} AddNewTicketListing={this.props.AddNewTicketListing} />
<SortTicketListings  {...this.props} toShowState={this.toShowState} handleFieldChange={this.handleFieldChange} ticketListings={this.props.ticketListings}   />
                {

                this.state.toShow ? this.props.ticketListings.filter(listing => (listing.dateofGame === this.state.dateofGame && listing.userId !== activeUserId && listing.sold === false) || (listing.userId !== activeUserId && listing.sold === false && listing.level === this.state) ).map(listing =>
                        <section key={listing.id} className="ticketListingCard card-body shadow">
                            <h3 className="card-title">{listing.listingHeader}</h3>
                            <p className="list-group-item">Opponent: {listing.opponent}</p>
                            <p className="list-group-item">Date of Game:{" "} {listing.dateofGame}</p>
                            <p className="list-group-item">Section:{" "}{listing.section}{" "}Price:{" "} ${listing.price}</p>
                            <p className="card-text"> Description: {listing.description}</p>
                            <Link className="to Messages" to={`/messages`}>Message Seller: {listing.user.username} </Link>


                        </section>



                    )


               : <TicketCard {...this.props} ticketListings={this.props.ticketListings}/>

                }



            </React.Fragment>
        )

    }

}