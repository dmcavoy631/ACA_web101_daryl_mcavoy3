
var mark = "X";
var boxId = "";

function gameMarker(player){
  mark = player;
  // console.log(X);
  // console.log(mark);
  
} 

function placeMark(boxId){
  document.getElementById(boxId).innerHTML = mark;
  // console.log(X);
  // console.log(mark);
}