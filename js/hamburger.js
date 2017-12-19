'use strict'

$(function() {
  // ハンバーガーメニュー実装
  $('#hamburger').click(function() {
    if ($('nav').hasClass('close')) {
      // ハンバーガーを右に移動
      $('#hamburger').stop().animate({
        left: '215px'
      }, 1000, 'swing');
      // ナビゲーションを右に移動
      $('nav').stop().animate({
        left: '0'
      }, 1000, 'swing');
      $('nav').toggleClass('close');
    } else {
      // ハンバーガーを左に移動（閉じる）
      $('#hamburger').stop().animate({
        left: '15px',
        top: '15px'
      }, 1000, 'swing');
      // ナビゲーションを左に移動（閉じる）
      $('nav').stop().animate({
        left: '-200px'
      }, 1000, 'swing');
      $('nav').toggleClass('close');
    }
  });
});
