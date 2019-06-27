import React, { Component } from "react"
import { Table } from 'reactstrap';
import "./standings.css"




export default class Standings extends Component {




    render() {
        console.log(this.props.standings)

        const standingsArray = this.props.standings.records || []

        const metro = standingsArray[0] || []
        const Metropolitan = metro.teamRecords || []

        console.log(Metropolitan)

        const atlantic = standingsArray[1] || []
        const AtlanticConf = atlantic.teamRecords || []



        const central = standingsArray[2] || []
        const CentralDiv = central.teamRecords || []


        const pacific = standingsArray[3] || []
        const PacificDiv = pacific.teamRecords || []

        return (
            <React.Fragment>

                <React.Fragment>
                    <h1 className="western" style={{ color: 'blue', textDecoration: 'none' }}>Western Conference</h1>
                    <Table >


                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th>Central Division</th>
                                <th>Games Played</th>

                                <th>Wins</th>
                                <th>Losses</th>
                                <th>OT</th>
                                <th>Points</th>
                                <th>ROW</th>

                            </tr>
                        </thead>

                        {CentralDiv.map(standing =>
                            <tbody >
                                <tr>
                                    {/* <th scope="row"></th> */}
                                    <td>{standing.clinchIndicator} {standing.team.name}</td>
                                    <td>{standing.gamesPlayed}</td>

                                    <td>{standing.leagueRecord.wins}</td>
                                    <td>{standing.leagueRecord.losses}</td>
                                    <td>{standing.leagueRecord.ot}</td>
                                    <td>{standing.points}</td>
                                    <td>{standing.row}</td>

                                </tr>


                            </tbody>)}

                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th>Pacific Division</th>
                                <th>Games Played</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>OT</th>
                                <th>Points</th>
                                <th>ROW</th>

                            </tr>
                        </thead>

                        {PacificDiv.map(standing =>
                            <tbody >
                                <tr>
                                    {/* <th scope="row"></th> */}
                                    <td>{standing.clinchIndicator} {standing.team.name}</td>
                                    <td>{standing.gamesPlayed}</td>
                                    <td>{standing.leagueRecord.wins}</td>
                                    <td>{standing.leagueRecord.losses}</td>
                                    <td>{standing.leagueRecord.ot}</td>
                                    <td>{standing.points}</td>
                                    <td>{standing.row}</td>

                                </tr>


                            </tbody>)}


                    </Table>


                </React.Fragment>

                <React.Fragment>
                    <h1 className="eastern" style={{ color: 'red', textDecoration: 'none' }}>Eastern Conference</h1>
                    <Table>


                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th>Metropolitan Division</th>
                                <th>Games Played</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>OT</th>
                                <th>Points</th>
                                <th>ROW</th>

                            </tr>
                        </thead>

                        {Metropolitan.map(standing =>
                            <tbody >
                                <tr>
                                    {/* <th scope="row"></th> */}
                                    <td>{standing.clinchIndicator} {standing.team.name}</td>
                                    <td>{standing.gamesPlayed}</td>
                                    <td>{standing.leagueRecord.wins}</td>
                                    <td>{standing.leagueRecord.losses}</td>
                                    <td>{standing.leagueRecord.ot}</td>
                                    <td>{standing.points}</td>
                                    <td>{standing.row}</td>

                                </tr>


                            </tbody>)}

                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th>Atlantic Division</th>
                                <th>Games Played</th>
                                <th>Wins</th>
                                <th>Losses</th>
                                <th>OT</th>
                                <th>Points</th>
                                <th>ROW</th>

                            </tr>
                        </thead>

                        {AtlanticConf.map(standing =>
                            <tbody >
                                <tr>
                                    {/* <th scope="row"></th> */}
                                    <td>{standing.clinchIndicator} {standing.team.name}</td>
                                    <td>{standing.gamesPlayed}</td>
                                    <td>{standing.leagueRecord.wins}</td>
                                    <td>{standing.leagueRecord.losses}</td>
                                    <td>{standing.leagueRecord.ot}</td>
                                    <td>{standing.points}</td>
                                    <td>{standing.row}</td>

                                </tr>


                            </tbody>)}


                    </Table>


                </React.Fragment>
                <div className="info">
                    <p>p = President's Trophy</p>
                    <p>x = Clinched Playoff Spot</p>
                    <p>z = Clinched Conference</p>
                    <p>OT = Overtime/shootout Losses</p>
                    <p>ROW = Regulation plus Overtime Wins</p>

                </div>
            </React.Fragment>
        )
    }
}