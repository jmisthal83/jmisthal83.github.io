$(document).ready(function() {
  $('.plus').click(function() {          
    var text = $(this).children().text()
    if (text == 'Read more >') { readless() } 
    else { readmore() }
    event.preventDefault();
  }); 
  
  function readless () {
    $('#show-this-on-click').slideDown();
    var t = $('.plus')//.children()
    var c = t.clone().attr('class', 'newtarget')
    $('.post').append(c)
    $(".newtarget").fadeOut(500, function() {  $(this).remove(); });
    $(".plus").children().hide().text('Read less <').fadeIn(600);
   }//readless func
  
  function readmore () {
   $('#show-this-on-click').slideUp();
    var t = $('.plus')//.children()
    var c = t.clone().attr('class', 'newtarget')
    $('.post').append(c)
    $(".newtarget").fadeOut(500, function() { $(this).remove(); });
    $(".plus").children().hide().text('Read more >').fadeIn(600);
   } 
  });

                
                
                