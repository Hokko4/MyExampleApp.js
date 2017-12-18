'use strict'

$(function() {
  // ハンバーガーメニュー実装
  $('#hamburger').click(function() {
    // $('nav').show();
    if ($('nav').hasClass('close')) {
      $('#hamburger').stop().animate({
        left: '200px'
      }, 1000, 'swing');
      $('nav').stop().animate({
        left: '0'
      }, 1000, 'swing');
      $('nav').toggleClass('close');
    } else {
      $('#hamburger').stop().animate({
        left: '15px',
        top: '15px'
      }, 1000, 'swing');
      $('nav').stop().animate({
        left: '-200px'
      }, 1000, 'swing');
      $('nav').toggleClass('close');
    }
  });
});
