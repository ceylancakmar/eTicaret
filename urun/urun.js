$(document).ready(function() {
    $('.close').hide();
    $('.add').click(function() {
      $('.checkout').css('margin-left', '0em'),
      $('.cont').css('margin-left', '8em'),
      $('.add').css('background', 'transparent'),
      $('.close').show();
    });
    
    $('.close').click(function() {
      $('.close').hide();
      $('.checkout').css('margin-left', '-8.1em'),
      $('.add').css('background', '#16A085'),
      $('.cont').css('margin-left', '16.2em');
    });
  });