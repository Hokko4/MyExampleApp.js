'use strict'

$(function() {
  //アコーディオンメニューの実装
  $('.accordion dt').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
    console.log('click');
  });
});
