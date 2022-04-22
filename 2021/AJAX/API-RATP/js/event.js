function game() {
    $.ajax({
        url: "https://data.ratp.fr/explore/dataset/trafic-annuel-entrant-par-station-du-reseau-ferre-2019/api/",
        method: 'GET',
        dataType: 'json'
    })
    .done(getData)
    .fail(function () {
        console.log("La requête a échoué");
    })
};

// la fonction getdata permet de récupérer les données
function getData(response) {
    console.log(response);
    for (let i = 0; i < response.results.length; i++) {
        $('.play').append("<section>")
            .append("<article>")
            .append($("<h2>").text(response.results[i].category))
            .append($("<p>").text(response.results[i].question))
            .append($("<p>").text(response.results[i].difficulty))
        .append($("<p>").text(response.results[i].correct_answer))
    }
};


game();


