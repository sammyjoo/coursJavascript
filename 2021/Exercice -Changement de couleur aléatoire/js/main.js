var bodyBcg = document.querySelector('body');
var colorBtn = document.querySelector('.colorBtn');
var hex = document.querySelector('.hex');
var hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D' ,'E' ,'F'];
var hexBtn = document.querySelector('.colorBtn');

function getHexColor(){
    let hexcolor = "#";
    
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumbers.length);
        hexColor += hexNumbers [random];
    };
    bodyBcg.style.backgroundColor = hexColor;
    hex.innerHTML = hexColor;
    
};

hexBtn.addEventListener('click', getHexColor);
//var colors = ['#900C3F', '#1F9C9C', '#F7D228', '#6B9BF5', '#E2833C'];

//function changeColor(){
//    let random = Math.floor(Math.random() * colors.length);
//    bodyBcg.style.backgroundColor = colors[random];
//};

//colorBtn.addEventListener('click', changeColor);
