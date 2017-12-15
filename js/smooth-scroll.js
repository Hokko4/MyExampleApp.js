'use strict'

$(function() {
  // リンクをクリックしたときに処理を行う
  $('a[href^="#"]').click(function() {
    var speed = 1000;
    var href = $(this).attr('href');
    var target = $(href === '#' || href === '' ? 'html' : href);
    var position = target.offset().top;
    
    $('body,html').animate({scrollTop:position}, speed, 'swing');

    return false;
  });
});
