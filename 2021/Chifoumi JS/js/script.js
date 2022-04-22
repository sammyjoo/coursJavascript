'use strict'; // va permettre de révéler les fautes en erreurs afin de les corriger et d'éviter des bugs

var choix = ['pierre', 'papier', 'ciseau'];
var choixOrdi;
var choixJoueur;
//var result = [choixOrdi, choixJoueur];
var scoreOrdi;
var scoreJoueur;

// fonction qui nous donne le choix de l'ordinateur
function getComputerChoice() {
    var choixOrdi = choix[Math.round(Math.random()*2)];
    console.log(choixOrdi);
};

// fonction qui remet les compteurs à zéro lorsque l'un des 2 joueurs perd
function reset() {
    scoreJoueur = 0;
    scoreOrdi = 0;
    
    const scoreJoueurSpan = document.getElementById('user-score');
    const scoreOrdiSpan = document.getElementById('computer-score');
    
    scoreJoueurSpan.innerHTML = scoreJoueur;
    scoreOrdiSpan.innerHTML = scoreOrdi;
};

// fonction qui gère le score du joueur
function win() {
    scoreJoueur++;
    scoreJoueurSpan.innerHTML = scoreJoueur;
    if (scoreJoueur == 5) {
        alert(' Vous êtes arrivés à 5 points, vous avez gagné !');
        reset();
    } else if (scoreOrdi == 5) {
        alert(" L'ordinateur est arrivé à 5 points, vous avez perdu !");
        reset();
    }
};

// fonction qui gère le score de l'ordinateur
function lose() {
    scoreOrdi++;
    scoreOrdiSpan.innerHTML = scoreOrdi;
};

// function qui gère l'égalité entre les 2 joueurs
function equal() {
    
};

// fonction qui gère les choix du joueur et de l'ordinateur
function game() {

};

// fonction qui gère les évènements
function main() {

};


//document.getElementsByClassName('choice').addEventListener('click', getComputerChoice);
