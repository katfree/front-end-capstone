import React, { Component } from "react"
import moment from "moment"
import "./schedule.css"
import {
    Card, CardTitle, CardText, CardColumns,

} from 'reactstrap';



export default class Schedule extends Component {

    render() {
        // const nextgameinfo = this.props.upcomingGameInfo.teams || []
        console.log(this.props.gameSchedule)

        const schedule = this.props.gameSchedule.dates || []


        // {?nextgameinfo.filter(game.nextGameSchedule.dates.games.teams.away.team.name === "Nashville Predators") }
        // {?nextgameinfo.filter(game.nextGameSchedule.dates.games.teams.away.team.name !== "Nashville Predators")) }
        // (Wins: {game.games[0].teams.away.leagueRecord.wins} Losses: {game.games[0].teams.away.leagueRecord.losses})
        // (Wins: {game.games[0].teams.away.leagueRecord.wins} Losses: {game.games[0].teams.away.leagueRecord.losses})
        return (
            <div className="schedulePage">
                <CardColumns className="scheduleCard">
                {
                    schedule.filter(game => game.date >= moment().format("YYYY-MM-DD")).flatMap(game =>
                    <Card key={game.date} className="schedule ">
                    <CardTitle className="Cardtext">{game.games[0].teams.away.team.name} </CardTitle>
                    <CardTitle  className="Cardtext">VS.</CardTitle>
                    <CardTitle  className="Cardtext">{game.games[0].teams.home.team.name}    </CardTitle>
                    <CardTitle className="listingHeader">Date: {game.date}</CardTitle>
                    <CardTitle  className="Cardtext">@ {game.games[0].venue.name}</CardTitle>
                    </Card>
                    )

                }
                </CardColumns>
            </div>
        )
    }
}