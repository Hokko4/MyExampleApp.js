'use strict'

$(function() {
  // スライドショー実装
  $('.slide > ul li').hide();
  $('.slide > ul li:first-child').show();

  var interval = 3000;
  var speed = 1000;
  console.log($('.slide > ul li:last-child').length);

  // interval id
  var intId = setInterval(function() {
    var active = $('.active');
    var next = $('.active').next().length !== 0 ? $('.active').next() : $('.slide > ul li:first-child');
    console.log(next);
    active.fadeOut(speed).removeClass('active');
    next.fadeIn(speed).addClass('active');
  }, interval);
});
