import React, { Component } from "react"
import { Table } from 'reactstrap';
import "./roster.css"


export default class Roster extends Component {
    state = {
        playerStats: []
    }





    render() {





        const roster = this.props.roster.roster || []
        console.log(roster)


        return (
            <React.Fragment>

                <h1 className="rosterHeader">Current Team Roster</h1>
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Position</th>

                        </tr>
                    </thead>
                    {roster.map(roster =>

                        <tbody >
                            <tr>
                                <th scope="row">{roster.jerseyNumber}</th>
                                <td>{roster.person.fullName}</td>
                                <td>{roster.position.name}</td>
                            </tr>


                        </tbody>




                    )}



                </Table>

            </React.Fragment>

        )
    }
}