window.onload = function() 
 {
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var clearbutton = document.getElementById("clear");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineWidth = 1;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) {
        return; // stop the function when not moused down.
    }
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue>=360){
        hue = 0;
    }
    if(ctx.lineWidth >= 75 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if(direction){
        ctx.lineWidth++;
    } else {
        ctx.lineWidth = 1;
    }
    
    document.getElementById('clear').addEventListener('click', function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }, false);

}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', ()=> isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

clearbutton.onclick = clear;
    
}