// Sélection du canvas
//var canvas = document.getElementById('canvas');
// modifier la taille du canvas
//ctx.fillStyle = 'green';
//ctx.fillRect(10, 10, 100, 100);

// Création du contexte en 2 dimension
//var ctx = canvas.getContext('2d')

// Variables du "crayon"
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

const rect = myPics.getBoundingClientRect();

myPics.addEventListener('mousedown', e => {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    isDrawing = true;
  });
  
  myPics.addEventListener('mousemove', e => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
  });
  
  window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
      drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });
  
  function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }
  


// Fonction qui début le dessin
function start() {
    canvas = document.getElementById('canvas');
      ctx = canvas.getContext("2d");
      w = canvas.width;
      h = canvas.height;
  
      canvas.addEventListener("mousemove", function (e) {
          findxy('move', e)
      }, false);
      canvas.addEventListener("mousedown", function (e) {
          findxy('down', e)
      }, false);
      canvas.addEventListener("mouseup", function (e) {
          findxy('up', e)
      }, false);
      canvas.addEventListener("mouseout", function (e) {
          findxy('out', e)
      }, false);
};

// Fonction qui permet de dessiner si la condition est vraie
//function draw() {
   
//};

// Function pour changer de couleur
// eslint-disable-next-line
//function change_color() {
   
//};

// Function pour avoir une nouvelle feuille
//function new_sheet() {
    
//};

// Function qui va supprimer le dernier élément dessiné
//function clear_last() {
    
//};

// Function qui arrête le dessin au lever de la souris
//function stop() {
    
//};

// Gestionnaire d'évènements
//