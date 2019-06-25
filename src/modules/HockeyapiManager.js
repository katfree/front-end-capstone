
export default {
    getAllGames() {
        return fetch("https://statsapi.web.nhl.com/api/v1/schedule?teamId=18&startDate=2019-09-01&endDate=2020-06-15")
        .then(e => e.json())
      },
      getAllTeams() {
          return fetch ("https://statsapi.web.nhl.com/api/v1/teams")
          .then(e => e.json())
      },
      getTeamRoster() {
          return fetch("https://statsapi.web.nhl.com/api/v1/teams/18/roster")
          .then(e => e.json())

      },
      getUpcomingGameInfo() {
          return fetch("https://statsapi.web.nhl.com/api/v1/teams/18/?expand=team.schedule.next")
          .then(e => e.json())
      },
      getStandings(){
          return fetch("https://statsapi.web.nhl.com/api/v1/standings.record")
          .then(e => e.json())

      }

}