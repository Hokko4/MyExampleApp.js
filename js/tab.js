'use strict'

$(function() {
  // タブクリック実装

  $('.contents > ul li:first-child').addClass('active');
  $('.tab-box .tab:first-child').addClass('active');

  $('.contents > ul li').click(function() {
    var index = $('.contents > ul li').index(this);
    if ($(this).hasClass('active')) {
      return false;
    }

    $('.contents > ul li').removeClass('active');
    $(this).addClass('active');

    $('.tab-box .active').hide().removeClass('active');
    $('.tab-box .tab').eq(index).fadeToggle(1000).addClass('active');

    return false;
  });
});
