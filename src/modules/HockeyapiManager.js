
export default {
    getAllGames() {
        return fetch("https://statsapi.web.nhl.com/api/v1/schedule?teamId=18&startDate=2019-03-01&endDate=2019-06-01")
        .then(e => e.json())
      },
      getAllTeams() {
          return fetch ("https://statsapi.web.nhl.com/api/v1/teams")
          .then(e => e.json())
      }

}