import React, { Component } from "react"
import { Button } from 'reactstrap';

import "./ticketListing.css"
import Modal from 'react-responsive-modal';
import NewListingForm from "./NewListingForm";


export default class CreateNewTicketListing extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>

        <Button color="warning" className="sellButton" onClick={this.onOpenModal} >Sell Your Tickets</Button>

        <Modal open={open} onClose={this.onCloseModal} center>
          <NewListingForm {...this.props} CloseModal={this.onCloseModal} AddNewTicketListing={this.props.AddNewTicketListing} />

        </Modal>
      </React.Fragment>
    );
  }
}

