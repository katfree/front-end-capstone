import React, { Component } from "react"

import moment from "moment"
import TicketListingsManager from "../../modules/TicketListingsManager";
import Modal from 'react-responsive-modal';


export default class EditListing extends Component {


    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };


    state = {
        userId: "",
        listingHeader: "",
        section: "",
        price: "",
        description: "",
        dateofGame: "",
        opponent: "",
        open: false,
        sold: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateListing = evt => {
        evt.preventDefault()
        const editedListing = {
            id: this.props.listing.id,
            userId: parseInt(sessionStorage.getItem("credentials")),
            listingHeader: this.state.listingHeader,
            section: this.state.section,
            price: this.state.price,
            description: this.state.description,
            dateofGame: this.state.dateofGame,
            opponent: this.state.opponent,
            sold: this.state.sold




        }

        this.props.EditListing(editedListing, this.props.listing.id)
        .then(() => this.onCloseModal())


    }




    componentDidMount() {
        TicketListingsManager.get(this.props.listing.id)
            .then(listing => {
                this.setState(listing);
            })
    }





    render() {
        console.log(this.props.listing.id)
        console.log(this.state.section)

        let Datesarray = this.props.gameSchedule.dates || []


        let optionItems = Datesarray.filter(obj => obj.date >= moment().format("YYYY-MM-DD")).flatMap(date =>
            <option value={date.date} key={date.date} >{date.date}</option>
        )



        let Teamsarray = this.props.teams.teams || []
        let TeamOptionItems = Teamsarray.filter(obj => obj.name !== "Nashville Predators").flatMap(team =>

            <option value={this.state.opponent} key={team.name}>{team.name}</option>
        )


        const { open } = this.state;
        return (
            <React.Fragment>

<button onClick={this.onOpenModal}>Edit</button>
<Modal open={open} onClose={this.onCloseModal} center>
            <form>
                <div className="input-group">
                    <label className="input-group-addon"
                        id="basic-addon1"
                        htmlFor="listingHeader">
                        Listing Header
                     </label>
                    <input type="text"
                        aria-describedby="basic-addon1"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="listingHeader"
                        value={this.state.listingHeader}>

                    </input>
                </div>

                <div>
                    <label className="input-group-addon basic-addon1"
                        id="basic-addon1"
                        htmlFor="dateofGame">
                        Date of Game
                     </label>

                    <select
                        name="dateofGame"
                        id="dateofGame"
                        onChange={this.handleFieldChange}
                        value={this.state.dateofGame}
                        >

                        <option value={this.state.dateofGame}>{this.state.dateofGame}</option>
                        {optionItems}
                    </select>


                </div>


                <section>
                    <h3>Select A Section</h3>
                    <div className="form-group">

                        <label htmlFor="section">Upper Bowl</label>
                        <select

                            name="section"
                            id="section"
                            onChange={this.handleFieldChange}
                        >   <option>Upper</option>
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

                    <div className="form-group">

                        <label htmlFor="section">Club Level</label>
                        <select

                            name="section"
                            id="section"
                            onChange={this.handleFieldChange}
                        >   <option >Club</option>
                            <option value="201">201</option>
                            <option value="202">202</option>
                            <option value="203">203</option>
                            <option value="204">204</option>
                            <option value="205">205</option>
                            <option value="206">206</option>
                            <option value="207">207</option>
                            <option value="208">208</option>
                            <option value="209">209</option>
                            <option value="210">210</option>
                            <option value="211">211</option>
                            <option value="212">212</option>
                            <option value="213">213</option>
                            <option value="214">214</option>
                            <option value="215">215</option>
                            <option value="216">216</option>
                            <option value="217">217</option>
                            <option value="218">218</option>
                            <option value="219">219</option>
                            <option value="220">220</option>
                            <option value="221">221</option>
                            <option value="222">222</option>
                            <option value="223">223</option>
                            <option value="224">224</option>

                        </select>
                    </div>

                    <div className="form-group">

                        <label htmlFor="section">Lower Bowl</label>
                        <select

                            name="section"
                            id="section"
                            onChange={this.handleFieldChange}
                        >
                            <option >{this.state.section > 121 ? "Lower": this.state.section}</option>
                            <option value="101">101</option>
                            <option value="102">102</option>
                            <option value="103">103</option>
                            <option value="104">104</option>
                            <option value="105">105</option>
                            <option value="106">106</option>
                            <option value="107">107</option>
                            <option value="108">108</option>
                            <option value="109">109</option>
                            <option value="110">110</option>
                            <option value="111">111</option>
                            <option value="112">112</option>
                            <option value="113">113</option>
                            <option value="114">114</option>
                            <option value="115">115</option>
                            <option value="116">116</option>
                            <option value="117">117</option>
                            <option value="118">118</option>
                            <option value="119">119</option>
                            <option value="120">120</option>
                        </select>
                    </div>
                </section>

                <div className="input-group">
                    <label className="input-group-addon basic-addon1"
                        id="basic-addon1"
                        htmlFor="price">
                        $
                     </label>
                    <input type="text"
                        aria-describedby="basic-addon1"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="price"
                        value ={this.state.price}>
                    </input>
                </div>

                <div className="input-group">
                    <label className="input-group-addon basic-addon1"
                        id="basic-addon1"
                        htmlFor="description">
                        Description
                     </label>
                    <input type="text"
                        aria-describedby="basic-addon1"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="description"
                        value={this.state.description}>
                    </input>
                </div>




                <div>
                    <label className="input-group-addon basic-addon1"
                        id="basic-addon1"
                        htmlFor="opponent">
                        Opponent
                     </label>

                    <select
                        name="opponent"
                        id="opponent"
                        onChange={this.handleFieldChange}
                        value={this.state.opponent}>
                        <option value={this.state.opponent}>{this.state.opponent}</option>
                        {TeamOptionItems}
                    </select>

                </div>

                <div>
                    <label className="input-group-addon basic-addon1"
                        id="basic-addon1"
                        htmlFor="sold">
                        Sold?
                     </label>

                    <select
                        name="sold"
                        id="sold"
                        onChange={this.handleFieldChange}
                        value={this.state.sold}
                        >

                        <option>Have Your Tickets Been Sold?</option>
                        <option value= {true} >Yes</option>
                        <option value= {false} >No</option>

                    </select>


                </div>


                <button type="submit"
                    onClick={this.updateListing}> Create Listing</button>

            </form>
            </Modal>

            </React.Fragment>


        )
    }
}








