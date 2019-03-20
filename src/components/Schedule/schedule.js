import React, { Component } from "react"
import moment from "moment"
import "./schedule.css"



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
                {
                    schedule.filter(game => game.date >= moment().format("YYYY-MM-DD")).flatMap(game =>
                    <div key={game.date} className="schedule">
                    <h1>{game.date}</h1>
                    <p>{game.games[0].teams.away.team.name} (Wins: {game.games[0].teams.away.leagueRecord.wins} Losses: {game.games[0].teams.away.leagueRecord.losses})  </p>
                    <p>VS.</p>
                    <p>{game.games[0].teams.home.team.name}    (Wins: {game.games[0].teams.away.leagueRecord.wins} Losses: {game.games[0].teams.away.leagueRecord.losses}) </p>
                    <p>@ {game.games[0].venue.name}</p>
                    </div>
                    )

                }
            </React.Fragment>
        )
    }
}