
function formatMontant(montant) {
    let intL = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })
    // Intl.NumberFormat est un constructeur permettant de créer des objets pour formater des nombres en fonction de la locale
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    return intL.format(montant);
}


function getCours() {
    // Lancer l'appel AJAX vers l'API de cryptocompare.com
    let ajax = new XMLHttpRequest();
    
    // readyState indique le stade d'avancement de la requête AJAX
    // allant de 0 à 4
    console.log("Readystate de la requête : " , ajax.readyState)

    ajax.onreadystatechange = function() {
        
        let readyStateDescription;
        switch(ajax.readyState) {
            case 0: 
            readyStateDescription = "UNSENT : Le client a été créé. open() n'a pas encore été appelé.";
            break; 
            case 1: 
            readyStateDescription = "OPEN : open()a été appelé.";
            break; 
            case 2: 
            readyStateDescription = "HEADERS_RECEIVED : send() a été appelé, et les en-têtes et le statut sont disponibles. ";
            break; 
            case 3: 
            readyStateDescription = "LOADING : Téléchargement; responseText contient des données partielles. ";
            break; 
            case 4: 
            readyStateDescription = "DONE : L'opération est terminée.";
            break; 
        }
        
        console.log("Readystate de la requête a changé : ", ajax.readyState, " ", readyStateDescription)

    }

    let url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR";

    ajax.open("GET", url, true); // Définir la requête
    ajax.send(); // Envoyer la requête


    ajax.onload = function() {
        console.log("Appel AJAX terminé");
        console.log("Status : " + this.status);
        console.log("Response : " + this.response);


        if(this.status == 200) {
            let json = JSON.parse(this.response);
            console.log(json);
            let eur = formatMontant(json.EUR);
            let date = new Date();
            document.getElementById('cours').innerHTML = eur;
            document.getElementById('horo').innerHTML = date.toLocaleString();
        }
    }

    // Si la requête échoue 
    ajax.ontimeout = function() {
        console.log("Le service n'a pas répondu à temps : nouvel essai dans 5 sec.")
        setTimeout("getCours()", 5000)
    }

}



window.onload = function() {
    
    getCours();
    setInterval(getCours, 10000);
    
}


console.log(formatMontant(3000));