var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var fps = 1000/60
var timer = setInterval(game, fps)

var w = 100;
var h = 100;
var x = 0;
var y = (canvas.height/2)-(h/2);
var speed = 5;

function game(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    x+=speed;
    ctx.fillStyle = "red"
    ctx.fillRect(x, y, w, h)

}

game();