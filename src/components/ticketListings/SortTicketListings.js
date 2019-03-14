import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"


export default class SortTicketListings extends Component {





    filterBylevel = evt => {
        evt.preventDefault()
      this.props.toShowState()
    }


    render() {
        return (
            <React.Fragment>
                <form>

                    <div>
                        <label className="input-group-addon basic-addon1"
                            id="basic-addon1"
                            htmlFor="sortby">

                     </label>

                        <select
                            name="sortby"
                            id="sortby"
                            onChange={this.props.handleFieldChange}>
                            <option >Search by...</option>
                            <option value="Upper">Upper Bowl</option>
                            <option value="Club">Club Level</option>
                            <option value="Lower">Lower Bowl</option>
                            <option >Show All Listings</option>

                        </select>



                    <button type="submit" onClick={this.filterBylevel}>Search</button>
                    </div>

                </form>


            </React.Fragment>
        )
    }
}