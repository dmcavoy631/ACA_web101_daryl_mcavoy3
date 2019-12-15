$(document).ready(function() {
  let $list = $('.TDtask');
  let $todoList = $('#todoList');

  // Identify list div
  $('#todoList').css('border', '4px solid red');
  
  $todoList.on('submit', function(){
    //  Get input value
    let task = $('input[type="text"]').val();
    // Add li ITEM
    $list.append(`<li> ${task} </li>`);
    $('input[type="text"]').val('');
    // Persit enter, no return value on "Submit"
    return false;
    
  });

  // .remove  from li elements when clicked.
  $list.on('click', 'li', function(){
    let $this = $(this);
    $this.remove();
  });

  });