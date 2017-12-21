'use strict'

$(function() {
  // スライドショー実装
  $('.slide > ul li').hide();
  $('.slide > ul li:first-child').show();

  var interval = 3000;
  var speed = 1000;
  console.log($('.slide > ul li:last-child').length);

  $('.slide > ul li:first-child').addClass('active');
  $('.banner > ul li:first-child').addClass('active');

  // interval id
  var intId;

  function startTimer(){
    intId = setInterval(function() {
      var active = $('.slide .active');
      var next = active.next().length !== 0 ? active.next() : $('.slide > ul li:first-child');
      var ban = $('.banner .active').next().length !== 0 ? $('.banner .active').next() : $('.banner > ul li:first-child');

      fade(active, next);
      change($('.banner .active'), ban);
    }, interval);
  };

  // class付け替え
  function change(prevObj, nextObj){
    prevObj.removeClass('active');
    nextObj.addClass('active');
  }

  // fadein, fadeout
  function fade(prevObj, nextObj){
    prevObj.fadeOut(speed).removeClass('active');
    nextObj.fadeIn(speed).addClass('active');
  }

  // prev button
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
    var ban = $('.banner ul li.active');
    change(ban, ban.prev());
    fade(activeSlide, activeSlide.prev());

    startTimer();
  });

  // next button
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
    var ban = $('.banner ul li.active');
    change(ban, ban.next());
    fade(activeSlide, activeSlide.next());

    startTimer();
  });

  // banner click
  $('.banner ul li').click(function() {
    clearInterval(intId);
    console.log('stop interval');

    if ($(this).hasClass('active')) {
      console.log('has active');
      startTimer();
      return false;
    }

    var selectedBanner = $(this);
    var num = selectedBanner.prevAll().length;
    var selectedSlide = $('.slide ul li:nth-child(' + (num+1) + ')');

    change($('.banner ul li'), selectedBanner);
    fade($('.slide .active'), selectedSlide);

    startTimer();
    return false;
  });

  // 初期タイマー開始
  startTimer();
});
