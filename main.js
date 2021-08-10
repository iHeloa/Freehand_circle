canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
canvas.addEventListener("mousedown",my_mouseDown);
function my_mouseDown(e){
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup",my_mouseUp);
function my_mouseUp(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove",my_mouseMove);
function my_mouseMove(e){
current_position_of_x = e.clientX - canvas.offsetLeft;
current_position_of_y = e.clientY - canvas.offsetTop;
if (mouseEvent == "mousedown"){
ctx.beginPath();
ctx.StrokeStyle = "Blue";
ctx.lineWidth = 3;
//ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.arc(current_position_of_x, current_position_of_y,20,0,2 * Math.PI);
//ctx.lineTo(current_position_of_x, current_position_of_y);
ctx.stroke();
}
last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;
}