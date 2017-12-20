'use strict'

$(function() {
  $('#json').click(function() {
    $('#result').html('データ取得中です');
    $('span').html('');

    // JSONを取得
    $.getJSON('http://httpbin.org/get', {
      username: 'Hokko4',
      repository: 'Hokko4/MyExampleApp.js',
      author: 'Hokko4',
      url: 'https://github.com/Hokko4/MyExampleApp.js.git'
    }).done(function(data) {
      // 成功時の処理
      $('#username').html(data['args']['username']);
      $('#repository').html(data['args']['repository']);
      $('#author').html(data['args']['author']);
      $('#url').html(data['args']['url']);
      console.log(data);
      console.log(JSON.stringify(data));
      $('#result').html('成功しました');
    }).fail(function() {
      // 失敗時の処理
      $('#result').html('失敗しました');
    }).always(function() {
      // 共通処理
      $('#complete').html('完了しました');
    });
  });
});
