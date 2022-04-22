function game() {



    $.ajax({ 
        url:resquestG,
        method:"GET",
        dataType:"json"
    })
    .done(function(response){
        console.log(response);

        //récupère l'année(year) une a une en (length) et le type de sexe dans l'année 
        // years c'est le tableau
        // year c'est l'annee qui est declaré, let year = ...
        //donc je recupere le nombre d'homme et femme dans 1 annee
        //avec un if 
        // push est utiliser pour pousser l'éléments
        // on crée "index" et on met "indexOf" pour recuperé dans chaque index (year) l'année 1 seul fois et le nombre total de "sexe" dans cette année
        
        let records = response.records;
            for (let i = 0; i<records.length; i++){
                let year = records[i].fields.annee;
                let sexe = records[i].fields.sexe;
               
                
                if (years.includes(year)==false){
                    years.push(year)
                    if (sexe=="M"){
                        homme.push(1)
                        femme.push(0)
                    }
                    else{
                        femme.push(1)
                        homme.push(0)
                    }
                }
                else{
                    let index = years.indexOf (year)
                    if(sexe=="M"){
                        homme[index]++
                    }
                    else{
                        femme[index]++
                    }
                }
            }





            let arthur = []
            let maya = []
            for(let i=0; i<50; i++){
                let annee       = records[i].fields.annee;
                let prenoms     = records[i].fields.prenoms;
                let label       = prenoms+" en "+annee;
                let count       = records[i].fields.nombre;
                
                    if(years.includes(annee)==false){
                        years.push(annee)
                        if(prenoms=="Arthur"){
                                arthur.push(1)
                                maya.push(0)
                        }
                        else{
                            maya.push(1)
                            arthur.push(0)
                        }
                    }
            else{
                let index = years.indexOf(annee)
                if(prenoms=="Arthur"){
                    arthur[index]++
                }
                else{
                    maya[index]++
                }
            }
        
    
    
    
            topTenLabels.push(label);
            topTenCount.push(count);
    
            }
        
        // pour afficher le graph.js
        BarGraph("TopTenTitleChart",
                years,
                homme,
                "hommes",
                femme,
                "femmes");

        polarAreaGraph("TopTenTitleChart",
                topTenLabels,
                "Titre a definir1",
                topTenCount);

        
        //pour récupéré des element dans le Json, dans la console
        //console.log(records[4].fields.prenoms);

        
    })
    .fail(function () {
        console.log("La requête a échoué");
    })
};

// la fonction getdata permet de récupérer les données
//function getData(response) {
//    console.log(response);
//    for (let i = 0; i < response.results.length; i++) {
//        $('.play').append("<section>")
//            .append("<article>")
//            .append($("<h2>").text(response.results[i].category))
//            .append($("<p>").text(response.results[i].question))
//            .append($("<p>").text(response.results[i].difficulty))
//        .append($("<p>").text(response.results[i].correct_answer))
//    }
//};


//game();


