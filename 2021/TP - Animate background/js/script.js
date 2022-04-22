// --------- VARIABLES GLOBALES & SÉLECTIONS ÉLÉMENTS
let GLOBALES
let elements
let right = document.getElementById("right")
let left = document.getElementById("left")
let up = document.getElementById("up")
let down = document.getElementById("down")


// --------- FONCTIONS AVEC AJOUT DE STYLE POUR CHAQUE FLÈCHE
function haut(){
    background.style.animation="up 10s linear infinite"
}
up.addEventListener("mouseover",haut);
// --------- GESTIONNAIRES D'ÉVÈNEMENTS

