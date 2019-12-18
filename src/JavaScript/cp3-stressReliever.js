$(document).ready(function() {



var $count = 0;
var $x = null;

// Add animation shake and remove at animationend
  $('.icon').click(function(){
    $(this).addClass('animated shake').one('animationend',function(){
      $(this).removeClass('animated shake');});
    $x = $(this).clone();

    // $('.box').append($x);
    $('.spaceCats').append($x);
    
  // increase count and console
  $count++;
  console.log($count);


  // Add animation rubberBand to .next() and remove at animationend
    $(this).next().addClass('animated rubberBand').one('animationend',function(){
      $(this).removeClass('animated rubberBand');});
    // This will add a counter but needs work.
    // ,$(this).html($count)





    // add count this = next()
    // console.log(this);

    

    // Alert Box
    if($count > 20) {
      alert("This is getting werid...maybe you should stop")
    } 

  });



var video = $('#myVideo').get(0);
// // Get the button
var btn = $("#myBtn");

// Pause and play the video, and change the button text

  $('#myBtn').click(function(){
    if (video.paused) {
        video.play();
        $(this).html('Pause');
      } else {
        video.pause();
        $(this).html('Play');
        }
  });



});