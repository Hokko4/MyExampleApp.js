'use strict'

$(function() {
  //モーダルウィンドウの実装
  // 開くとき
  $('#open').click(function() {
    // $('#modal').css('display', 'block');
    // $('body').css('background-color', '#000');
    // $('body').append('<div id="layer"></div>');
    $('#layer').show();
    $('#layer').toggleClass('active');
    $('#modal').toggleClass('active');
  });

  // 閉じるとき
  $('#close').click(function() {
    $('#layer').hide();
    $('#modal').toggleClass('active');
  });

  $('#layer').click(function() {
    $(this).hide();
    $('#modal').toggleClass('active');
  });
});
