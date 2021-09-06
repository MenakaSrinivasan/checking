canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle= "lightblue";
ctx.lineWidth= 2 ;
ctx.arc(350,201,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 2 ;
ctx.arc(450,201,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 2 ;
ctx.arc(550,201,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "orange";
ctx.lineWidth= 2 ;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "lightgreen";
ctx.lineWidth= 2 ;
ctx.arc(500,250,40,0,2*Math.PI);
ctx.stroke();