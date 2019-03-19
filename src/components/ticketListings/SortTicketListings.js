import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import moment from "moment"


export default class SortTicketListings extends Component {








    filterBylevel = evt => {
        evt.preventDefault()
        this.props.toShowState()
    }


    render() {
        let Datesarray = this.props.gameSchedule.dates || []

        console.log(Datesarray)


        let optionItems = Datesarray.filter(game => game.games[0].teams.home.team.name === "Nashville Predators" && game.date >= moment().format("YYYY-MM-DD")).flatMap(game =>
            <option value={game.date} key={game.date} >{game.date}</option>
        )

        console.log(optionItems)
        return (
            <React.Fragment>
                <form>

                    <div>
                        <label className="input-group-addon basic-addon1"
                            id="basic-addon1"
                            htmlFor="sortby">
                            Search By...

                        </label>

                        <select
                            name="dateofGame"
                            id="dateofGame"
                            onChange={this.props.handleFieldChange}>
                            <option value = "">Date of Game</option>
                            {optionItems}
                            <option value = "">Show All Listings</option>


                        </select>

                        <select
                            name="level"
                            id="level"
                            onChange={this.props.handleLevelFieldChange}>
                            <option value = "">Level</option>
                            <option value="Upper">Upper Bowl</option>
                            <option value="Club">Club Level</option>
                            <option value="Lower">Lower Bowl</option>
                            <option value = "">Show All Listings</option>

                        </select>



                        <button type="submit" onClick={this.filterBylevel}>Search</button>
                    </div>

                </form>


            </React.Fragment>
        )
    }
}