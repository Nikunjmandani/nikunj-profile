var d = new Date();
var today = d.toJSON();

$.ajax({
  headers: { 'X-Auth-Token': '82faf7b4045841ee8ce4f54deed3c82d' },
  url: 'https://api.football-data.org/v1/competitions/445/leagueTable',
  "date": "today",
  dataType: 'json',
  type: 'GET',
}).done(function(league) {
    $.each(league.standing, function(i, item) {
        $("<tr id=" + item.teamName.replace(/\s|\&/g,'').toLowerCase() + ">").html(
            "<td>" 
            + item.position + "</td><td><img src=" 
            + item.crestURI + " class='small'></td><td>" 
            + item.teamName + "</td><td>" 
            + item.playedGames + "</td><td>" 
            + item.wins + "</td><td>"
            + item.draws + "</td><td>"
            + item.losses + "</td><td>"
            + item.goals + "</td><td>"
            + item.goalsAgainst + "</td><td>"
            + (item.goals - item.goalsAgainst) + "</td><td>"
            + item.points + "</td>")
            .appendTo('#teams-list');
    })
}).fail(function(err) {
   throw err
})