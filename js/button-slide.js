'use strict'

$(function() {
  // スライドショー実装
  $('.slide > ul li').hide();
  $('.slide > ul li:first-child').show();

  var interval = 3000;
  var speed = 1000;
  console.log($('.slide > ul li:last-child').length);

  $('.slide > ul li:first-child').addClass('active');
  $('.page > ul li:first-child').addClass('active');

  // interval id
  var intId;

  function startTimer(){
    intId = setInterval(function() {
      var active = $('.slide .active');
      var next = active.next().length !== 0 ? active.next() : $('.slide > ul li:first-child');
      var btn = $('.page .active').next().length !== 0 ? $('.page .active').next() : $('.page > ul li:first-child');

      active.fadeOut(speed).removeClass('active');
      next.fadeIn(speed).addClass('active');
      $('.page .active').removeClass('active');
      btn.addClass('active');
    }, interval);
  };

  // ボタン選択時の処理
  $('.page ul li').click(function() {
    if ($(this).hasClass('active')) {
      console.log('has active');
      return;
    }

    clearInterval(intId);
    console.log('stop interval');

    var selectedBtn = $(this);
    var num = selectedBtn.prevAll().length;
    console.log(num);
    var selectedSlide = $('.slide ul li:nth-child(' + (num+1) + ')');
    console.log(selectedSlide);

    $('.page ul li').removeClass('active');
    selectedBtn.addClass('active');
    $('.slide .active').fadeOut(speed).removeClass('active');
    selectedSlide.fadeIn(speed).addClass('active');
    startTimer();
  });

  $('#prev').click(function() {
    clearInterval(intId);
    console.log('stop interval');

    var activeSlide = $('.slide .active');
    var num = activeSlide.prevAll().length;
    if (num === 0) {
      startTimer();
      return;
    }

    var btn = $('.page ul li.active');
    btn.removeClass('active');
    btn.prev().addClass('active');
    activeSlide.fadeOut(speed).removeClass('active');
    activeSlide.prev().fadeIn(speed).addClass('active');

    startTimer();
  });

  $('#next').click(function() {
    clearInterval(intId);
    console.log('stop interval');

    var activeSlide = $('.slide .active');
    var num = activeSlide.nextAll().length;
    if (num === 0) {
      startTimer();
      return;
    }

    var btn = $('.page ul li.active');
    btn.removeClass('active');
    btn.next().addClass('active');
    activeSlide.fadeOut(speed).removeClass('active');
    activeSlide.next().fadeIn(speed).addClass('active');

    startTimer();
  });

  // タイマー開始
  startTimer();
});
