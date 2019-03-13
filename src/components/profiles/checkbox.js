import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TicketListingsManager from "../../modules/TicketListingsManager"


export default class CheckBox extends Component {

    state = {
        sold: false,
         showing: true

    }



    UpdateSoldStatus = () => {
        const updatedListing = {
            id: this.props.listing.id,
            sold: this.state.sold

        }
        TicketListingsManager.PatchCheckBox(updatedListing, this.props.listing.id)
    }


    handleInputChange = () => {
        this.setState({ sold: !this.state.sold, showing: !this.state.showing }, () => this.UpdateSoldStatus())

    }

    render() {

        const showing  = this.state.showing
        return (
            <React.Fragment>

            { showing ?
                <form>

                <label>Check When Sold</label>
                <input type="checkbox" onClick={ () => { if (window.confirm('Are you sure you want to mark this item as sold?')) this.handleInputChange()} } ></input>
                </form>

                :<div>SOLD </div>
            }


            </React.Fragment>
        )
    }
    

}