import React, { Component } from "react"

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "./ticketListing.css"
import moment from "moment"
import { storage } from "../firebase/Firebase"

export default class NewListingForm extends Component {

    state = {
        userId: "",
        listingHeader: "",
        section: "",
        price: "",
        description: "",
        dateofGame: "",
        opponent: "",
        sold: "",
        level: "",
        listingphotoURL: "",
        loadMin: "",
        loadMax: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handlePhoto = event => {
        if (event.target.files[0]) {
            const image = event.target.files[0]
            this.setState({
                imagefile: image})
            console.log(image)
        }
    }

    handleUpload = () => {

        const image = this.state.imagefile
        console.log(image)
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on("state_changed",
        () => {
            storage.ref('images').child(image.name).getDownloadURL().then( listingphotoURL => {

                this.setState({ listingphotoURL })
            })
            console.log(this.state.listingphotoURL, "AHHH")
        },
            (snapshot) => {
                this.setState({
                    loadMin: snapshot.bytesTransferred,
                    loadMax: snapshot.totalBytes
                })
            },



        )


    }

    createNewListing = evt => {
        evt.preventDefault()

        const listing = {
            userId: parseInt(sessionStorage.getItem("credentials")),
            listingHeader: this.state.listingHeader,
            section: this.state.section,
            price: this.state.price,
            description: this.state.description,
            dateofGame: this.state.dateofGame,
            opponent: this.state.opponent,
            level: this.state.level,
            sold: false,
            listingphotoURL: this.state.listingphotoURL

        }

        this.props.AddNewTicketListing(listing)
            .then(() => this.props.CloseModal())



    }


    render() {
        let Datesarray = this.props.gameSchedule.dates || []


        let optionItems = Datesarray.filter(game => game.games[0].teams.home.team.name === "Nashville Predators" && game.date >= moment().format("YYYY-MM-DD")).flatMap(game =>
            <option value={game.date} key={game.date} >{game.date}</option>
        )

        console.log(optionItems)
        let TeamOptionItems = Datesarray.filter(game => game.games[0].teams.home.team.name === "Nashville Predators" && game.date >= moment().format("YYYY-MM-DD")).flatMap(game =>
            <option value={game.games[0].teams.away.team.name} key={game.games[0].teams.away.team.name} >{game.games[0].teams.away.team.name}</option>
        )

        console.log(TeamOptionItems)

        return (

            <Form>
                <FormGroup>
                    <Label
                        id="basic-addon1"
                        htmlFor="listingHeader">
                        Listing Header
                        </Label>
                    <Input type="text"
                        placeholder="Listing Header"
                        aria-describedby="basic-addon1"
                        required
                        className="Form-control"
                        onChange={this.handleFieldChange}
                        id="listingHeader">
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label
                        id="basic-addon1"
                        htmlFor="dateofGame">
                        Date of Game
                     </Label>

                    <select
                        name="dateofGame"
                        id="dateofGame"
                        onChange={this.handleFieldChange}>

                        <option value="">Select Date</option>
                        {optionItems}
                    </select>


                </FormGroup>

                 <FormGroup>
                    <Label
                        id="basic-addon1"
                        htmlFor="opponent">
                        Opponent
                     </Label>

                    <select
                        name="opponent"
                        id="opponent"
                        onChange={this.handleFieldChange}>
                        <option value="">Select Opponent</option>
                        {TeamOptionItems}
                    </select>

                    </FormGroup>

                <FormGroup>
                    <Label
                        id="basic-addon1"
                        htmlFor="level">
                        Level
                     </Label>

                    <select
                        name="level"
                        id="level"
                        onChange={this.handleFieldChange}>

                        <option>Select Level</option>
                        <option value="Upper">Upper Bowl</option>
                        <option value="Club">Club Level</option>
                        <option value="Lower">Lower Bowl</option>


                    </select>


                </FormGroup>


                <FormGroup>
                    <h3>Select A Section</h3>


                    <Label htmlFor="section">Upper Bowl</Label>
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
                </FormGroup>

                <FormGroup>

                    <Label htmlFor="section">Club Level</Label>
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
                </FormGroup>

                <FormGroup>

                    <Label htmlFor="section">Lower Bowl</Label>
                    <select

                        name="section"
                        id="section"
                        onChange={this.handleFieldChange}
                    >
                        <option >Lower</option>
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
                </FormGroup>


                <FormGroup>
                    <Label
                        id="basic-addon1"
                        htmlFor="price">
                        $
                     </Label>
                    <Input type="text"
                        placeholder="price"
                        aria-describedby="basic-addon1"
                        required
                        className="Form-control"
                        onChange={this.handleFieldChange}
                        id="price">
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label
                        id="basic-addon1"
                        htmlFor="description">
                        Description
                     </Label>
                    <Input type="text"
                        placeholder="description"
                        aria-describedby="basic-addon1"
                        required
                        className="Form-control"
                        onChange={this.handleFieldChange}
                        id="description">
                    </Input>
                </FormGroup>
                <FormGroup>
                <Input type="file" onChange={this.handlePhoto} id="photoLink" />
                <div>
                <progress value={this.state.loadMin} max={this.state.loadMax}></progress>
                    <Button className="btn btn-primary saveImage" type="button" onClick={() => this.handleUpload()}>Upload</Button>
                </div>
                </FormGroup>

                <Button color="success" type="submit"
                    onClick={this.createNewListing} > Create Listing</Button>


            </Form>




        )
    }
}
