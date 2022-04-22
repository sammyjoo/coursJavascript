var canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
ctx.fillRect(20, 20, 150, 100);
ctx.lineWidth = '5';
ctx.font = ('30px arial');
ctx.fillStyle = 'blue';
ctx.strokeRect(300,20,150,100);
ctx.strokeText('Wake up', 1, 300);
