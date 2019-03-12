import React, { Component } from "react"

import "bootstrap/dist/css/bootstrap.min.css"
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
          <button onClick={this.onOpenModal}>Open modal</button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <NewListingForm {...this.props}  AddNewTicketListing={this.AddNewTicketListing}/>
          </Modal>
          </React.Fragment>
      );
    }
  }

