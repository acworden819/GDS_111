var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");

var fps = 1000/60
var timer = setInterval(game, fps)

var w = 100;
var h = 100;
var x = 0+w;
var y = (canvas.height/2)-(h/2);
var speedX = 5;
var speedY = 5;
var hit = false;
var fill = "red"
var fillStyles = [
    "red",
    "blue",
    "green",
    "orange",
    "yellow",
    "pink",
]


function game(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    x+=speedX;
    y+=speedY;

    speedX*=1.001
    speedY*=1.001
    if(x > canvas.width-w){
        //make square come out of other side
        speedX *= -1;
        hit = true;
    }

    if(x < 0+w){
        speedX*=-1;
        hit = true;
    }
    if(y < 0+h){
        speedY *= -1;
        hit = true;
    }
    if(y > canvas.height-h){
        //make square come out of other side
        speedY *= -1;
        hit = true;
    }
    ctx.fillStyle = fill
    if (hit){
        let rand = Math.floor(Math. random()*fillStyles.length-1) + 1
        fill = fillStyles[rand]
    }
    ctx.beginPath();
        //ctx.arc(x pos, y pos, radius, start angle, end angle, is clockwise?)
    ctx.arc(x,y,w,h,Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
    hit = false;


   // ctx.fillRect(x, y, w, h)
}

game();