import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./ticketListing.css"


export default class NewListingForm extends Component {

    state = {
        userId: "",
        listingHeader: "",
        level: "",
        section: "",
        price: "",
        description: "",
        dateofGame: "",
        opponent: ""
    }

    // {
    //     "id": 1,
    //     "userId": 1,
    //     "listingHeader": "2 tickets to Pens game on 3/21",
    //     "level": "Lower Bowl",
    //     "section": "112",
    //     "price": "1000",
    //     "description": "Two tickets in section 112 Row B seats 1&2. Aisle seats.",
    //     "dateOfGame": "03-21-2019",
    //     "opponent": "Pittsburgh Penguins"
    //   }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    createNewListing = evt => {
        evt.PreventDefault()

        const listing = {
            userId: parseInt(sessionStorage.getItem("credentials")),
            listingHeader: this.state.listingHeader,
            level: this.state.level,
            section: this.state.section,
            price: this.state.price,
            description: this.state.description,
            dateOfGame: this.state.dateofGame,
            opponent: this.state.opponent

        }

        this.props.AddNewTicketListing(listing)



    }

    render() {
        return (

            <form>
                <div className="input-group">
                    <label class="input-group-addon"
                        id="basic-addon1"
                        htmlFor="listingHeader">
                        Listing Header
                     </label>
                    <input type="text"
                        placeholder="listingHeader"
                        aria-describedby="basic-addon1"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="listingHeader">
                    </input>
                </div>
                {/* <div className="form-group">

                    <label htmlFor="level">Select A Level</label>
                    <select
                        defaultValue=""
                        name="level"
                        id="levelId"
                        onChange={this.handleFieldChange}
                    >
                        <option value="Upper">Upper Bowl</option>
                        <option value="Club">Club Level</option>
                        <option value="Lower">Lower Bowl</option>
                    </select>
                </div> */}
                <div className="form-group">

                    <label htmlFor="section">Upper Bowl</label>
                    <select
                        defaultValue=""
                        name="section"
                        id="sectionId"
                        onChange={this.handleFieldChange}
                    >   
                        <option value="301">301</option>
                        <option value="302">302</option>
                        <option value="303">303</option>
                        <option value="304">304</option>
                        <option value="305">305</option>
                        <option value="306">306</option>
                        <option value="307">307</option>
                        <option value="308">308</option>
                        <option value="309">309</option>
                        <option value="310">310</option>
                        <option value="311">311</option>
                        <option value="312">312</option>
                        <option value="313">313</option>
                        <option value="314">314</option>
                        <option value="315">315</option>
                        <option value="316">316</option>
                        <option value="317">317</option>
                        <option value="318">318</option>
                        <option value="319">319</option>
                        <option value="320">320</option>
                        <option value="321">321</option>
                        <option value="322">322</option>
                        <option value="323">323</option>
                        <option value="324">324</option>
                        <option value="325">325</option>
                        <option value="326">326</option>
                        <option value="327">327</option>
                        <option value="328">328</option>
                        <option value="329">329</option>
                        <option value="330">330</option>
                        <option value="331">331</option>
                        <option value="332">332</option>
                        <option value="333">333</option>
                    </select>
                </div>



            </form>




        )
    }
}