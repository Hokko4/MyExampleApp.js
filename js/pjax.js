'use strict'

$(function() {

  $(document).on('click', 'a', function(e) {
    var href = $(this).attr('href');

    e.preventDefault();
    console.log($.support.pjax);
    $('#main').stop().animate({
      opacity: 0
    }, 1000, function() {
      $.pjax({
        url: href,
        container: '#main',
        fragment: '#main'
      });
    });
    console.log('animate');
  });
  $(document).on('pjax:end', function() {
    $('#main').animate({
      opacity: 1
    }, 2000);
    console.log('end');
  });
});
