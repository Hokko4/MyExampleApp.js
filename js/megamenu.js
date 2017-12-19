'use strict'

$(function() {
  // メガメニューの実装
  $('.megaMenu a').hover(function() {
    var id = $(this).attr('id');
    console.log(id);

    $('.sub').css('display', 'none');

    if (id === 'm1') {
      $('#sub1').css({display:'flex', opacity:'0', height:'0'}).stop().animate({opacity:'1', visibility:'visible', height:'200px'}, 1000, 'swing');
    }
    if (id === 'm2') {
      $('#sub2').css({display:'flex', opacity:'0', height:'0'}).stop().animate({opacity:'1', visibility:'visible', height:'200px'}, 1000, 'swing');
    }
    if (id === 'm3') {
      $('#sub3').css({display:'flex', opacity:'0', height:'0'}).stop().animate({opacity:'1', visibility:'visible', height:'200px'}, 1000, 'swing');
    }
    if (id === 'm4') {
      $('#sub4').css({display:'flex', opacity:'0', height:'0'}).stop().animate({opacity:'1', visibility:'visible', height:'200px'}, 1000, 'swing');
    }
  }, function(){});

  $('.megaMenu a').mouseout(function() {
    var flag = false;
    $(':hover').each(function() {
      if($(this).hasClass('sub')) {
        console.log('has class');
        flag = true;
      }
    });
    if (!flag) {
      $('.sub').css('display', 'none');
    }
  });
});
