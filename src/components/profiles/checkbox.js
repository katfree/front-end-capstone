import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import TicketListingsManager from "../../modules/TicketListingsManager"


export default class CheckBox extends Component {

    state = {
        sold: false,
         showing: ""

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

    componentDidMount(){
        this.setState({showing: this.props.listing.sold})
    }

    render() {

        const showing  = this.state.showing
        return (
            <React.Fragment>

            { showing ? <div>SOLD </div>


                :<form>

                <label>Check When Sold </label>
                <input type="checkbox" onClick={ () => { if (window.confirm('Are you sure you want to mark this item as sold?')) this.handleInputChange()} } ></input>
                </form>
            }


            </React.Fragment>
        )
    }


}