import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import moment from "moment"


export default class SortTicketListings extends Component {








    filterBylevel = evt => {
        evt.preventDefault()
        this.props.toShowState()
    }


    render() {
        let Datesarray = this.props.gameSchedule.dates || []

        // console.log(Datesarray)


        let optionItems = Datesarray.filter(game => game.games[0].teams.home.team.name === "Nashville Predators" && game.date >= moment().format("YYYY-MM-DD")).flatMap(game =>
            <option value={game.date} key={game.date} >{game.date}</option>
        )

        // console.log(optionItems)
        return ( 
            <React.Fragment >
                        <Label className="input-group-addon basic-addon1"
                            id="basic-addon1"
                            htmlFor="sortby">
                            <strong>Search By... </strong>

                        </Label>

                        <select
                            name="dateofGame"
                            id="dateofGame"
                            onChange={this.props.handleFieldChange}>
                            <option value = "">Date of Game</option>
                            {optionItems}
                            


                        </select>

                    { this.props.toShow === true &&
                        <select
                            name="level"
                            id="level"
                            onChange={this.props.handleLevelFieldChange}>
                            <option value = "">Level</option>
                            <option value="Upper">Upper Bowl</option>
                            <option value="Club">Club Level</option>
                            <option value="Lower">Lower Bowl</option>


                        </select>

                    }


                        <Button type="submit" className="listingpagebutton" onClick={this.filterBylevel}>Search</Button>





            </React.Fragment>
        )
    }
}