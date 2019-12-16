$(document).ready(function() {
  var $gamePiece = null;
  var $gamePos = null;
  

  $('.gamePiece').click(function(){
    $gamePiece = $(this);
    //  log gamePiece
    console.log(this);
    // append game 
    // $(this).appendTo($(this).parent());


  });

  $('[class^="tower"]').click(function(){
    //  set $gamePos
    $gamePos = $(this);

    // log gamePos and gamePiece
    console.log($gamePos, $gamePiece);


    if ($gamePiece){
    // append gamePiece to pos
    $(this).append($gamePiece);
    // $gamePiece = null;
    }
    
  }); 

}); 
