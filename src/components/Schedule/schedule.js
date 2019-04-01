import React, { Component } from "react"
import moment from "moment"
import "./schedule.css"
import {
    Card, CardTitle, CardText, CardColumns,

} from 'reactstrap';



export default class Schedule extends Component {

    // <div>
    // <h1>Upcoming Game</h1>
    // {nextgameinfo.map(game =>
    //     <p>{game.name} vs.


    render() {
        // const nextgameinfo = this.props.upcomingGameInfo.teams || []
        console.log(this.props.gameSchedule)

        const schedule = this.props.gameSchedule.dates || []


        // {?nextgameinfo.filter(game.nextGameSchedule.dates.games.teams.away.team.name === "Nashville Predators") }
        // {?nextgameinfo.filter(game.nextGameSchedule.dates.games.teams.away.team.name !== "Nashville Predators")) }
        return (
            <React.Fragment>
                <CardColumns className="scheduleCard">
                {
                    schedule.filter(game => game.date >= moment().format("YYYY-MM-DD")).flatMap(game =>
                    <Card key={game.date} className="schedule ">
                    <CardTitle className="listingHeader">{game.date}</CardTitle>
                    <CardText className="Cardtext">{game.games[0].teams.away.team.name} (Wins: {game.games[0].teams.away.leagueRecord.wins} Losses: {game.games[0].teams.away.leagueRecord.losses})  </CardText>
                    <CardText  className="Cardtext">VS.</CardText>
                    <CardText  className="Cardtext">{game.games[0].teams.home.team.name}    (Wins: {game.games[0].teams.away.leagueRecord.wins} Losses: {game.games[0].teams.away.leagueRecord.losses}) </CardText>
                    <CardText  className="Cardtext">@ {game.games[0].venue.name}</CardText>
                    </Card>
                    )

                }
                </CardColumns>
            </React.Fragment>
        )
    }
}