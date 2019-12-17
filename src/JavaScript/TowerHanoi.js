$(document).ready(function() {
  var $gamePiece = null;
  var $gamePos = null;
  

  $('.gamePiece').click(function(){
    $gamePiece = $(this);
    // get game piece parent element (pos/tower)
    $gamePos = $(this).parent();

    //  log gamePiece and pos
    console.log(this)
    console.log($gamePos);

    // remove game pice 
    $(this).remove();

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
