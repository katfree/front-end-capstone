import React, { Component } from "react"




export default class Roster extends Component {
    state = {
        playerStats: []
      }





    render() {





        const roster = this.props.roster.roster || []



        return (
            <React.Fragment>
                <h1>Current Roster</h1>
            <div>
                {roster.map(roster =>
                    <div key={roster.person.id}>
                        <h3>{roster.person.fullName}</h3>
                        <p>Jersey Number: {roster.jerseyNumber}</p>
                        <p>Position: {roster.position.name}</p>
                    </div>

                    )}

            </div>
            </React.Fragment>

        )
    }
}