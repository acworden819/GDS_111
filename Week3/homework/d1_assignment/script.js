var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

//SQUARE
ctx.fillStyle = "#ffff00";
ctx.fillRect(85, 302, 100, 100);

ctx.strokeStyle = "#000000";
ctx.lineWidth = "5";
ctx.strokeRect(85, 302, 100, 100);


//CIRCLE
ctx.fillStyle = "#ffff00";
ctx.beginPath();
ctx.arc(385,441,68,0,Math.PI*2, false);
ctx.closePath();
ctx.fill();

ctx.strokeStyle = "#ff0000";
ctx.lineWidth = "5";
ctx.stroke();


//PENTAGON
ctx.fillStyle = "#ff00ff";
ctx.beginPath();
ctx.moveTo(557,308);
ctx.lineTo(668,283);
ctx.lineTo(726,381);
ctx.lineTo(652,467);
ctx.lineTo(547,421);
ctx.lineTo(557,308);
ctx.fill();

ctx.strokeStyle = "#00ffff";
ctx.lineWidth = "5";
ctx.stroke();


//STAR
ctx.fillStyle = "#ffff00";
ctx.beginPath();
ctx.moveTo(635,493);
ctx.lineTo(669,553);
ctx.lineTo(737,565);
ctx.lineTo(689,617);
ctx.lineTo(697,683);
ctx.lineTo(636,654);
ctx.lineTo(635-(696-635),683);
ctx.lineTo(635-(689-635),617);
ctx.lineTo(635-(737-635),565);
ctx.lineTo(635-(669-635),553);
ctx.lineTo(635,493);
ctx.fill();

ctx.strokeStyle = "#202020";
ctx.lineWidth = "5";
ctx.stroke();


//LINE
ctx.strokeStyle = "#ff0000";
ctx.beginPath();
ctx.moveTo(85, 682);
ctx.lineTo(279,548);
ctx.stroke();



