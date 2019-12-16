$(document).ready(function() {
  var $gamePiece = "";
  var $gamePos = "";
  

  $('.gamePiece').click(function(){
    let $gamePiece = $(this);
    //  log gamePiece
    console.log(this);
    // append game 
    $(this).appendTo($(this).parent());


  });

  $('[class^="pos"]').click(function(){
    //  Append gamePiece to CSS flex row
    let $gamePos = $(this);
    console.log($gamePos);
    $(this).append(this);
    // append gamePiece to pos
    // $(this).append(`${gamePiece}`);

  }); 

}); 
