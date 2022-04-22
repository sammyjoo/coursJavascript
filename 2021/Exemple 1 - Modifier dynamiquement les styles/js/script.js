function changer_style() {
   let p = document.getElementById('paragraphe'); 
   p.style.color = "red";
   p.style.border = "3px solid green";
   p.style.backgroundColor = 'black';
};

document.getElementsByTagName('body');
document.querySelector('.class');
document.querySelector('#class');
document.querySelectorAll('.class');

// Exemple 2

// let p = document.getElementById('paragraphe');
// let button = document.getElementById('btn');
// function changer_style2() {
//     p.style.backgroundColor = "#bbb";
//     //Modification via feuille CSS
//     p.classList.toggle('nomClass');
// };
// // Gestionnaire d'évènement
// button.addEventListener('click', changer_style2);