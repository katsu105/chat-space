function buildHTML(message) {
　var insertImage = '';
  var message_image = ""
  $("html,body").animate({scrollTop:$('.messages')[0].scrollHeight}, 'fast');

    if(message.image)
      {var message_image = `<img class="lower-message__image" src="${message.image}" >`
    }
    var html =
              `<div class="main__chatcomments" data-message-id="${message.id}" >
                <div class="main__chat-comments--user">
                  ${message.name}
                </div>
                <div class="main__chat-comments--text"></div>
                  <p class="lower-message__content">
                    ${message.content}<br />
                    ${message_image}
                  </p>
                </div>`
    return html;
  }

    var interval = setInterval(function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      var message_id = $('.main__chatcomments').last().data('message-id');
    $.ajax({ //ajax通信で以下のことを行う
      url: location.href, //urlは現在のページを指定
      type: 'GET', //メソッドを指定
      data: { //railsに引き渡すデータは
        message: { id: message_id } //このような形(paramsの形をしています)で、'id'には'message_id'を入れる
      },
      dataType: 'json' //データはjson形式
    })
      // 現在のアクションからデータを取得することができる。.jsonをつけることでデータの型を指定できる。

    .done(function(json) {
      var id = $('.main__chatcomments').last().data('message-id');
      var insertHTML = '';
      json.messages.forEach(function(message) {
        if (message.id > id ) {
          insertHTML += buildHTML(message);

        }
      });
      $('.messages').append(insertHTML);
    })
    .fail(function(json) {
      alert('自動更新に失敗しました')
    });
     } else {
    clearInterval(interval);
   }} , 5 * 1000 );

  // if文でページの指定 locationメソッド
  // doneメソッドの時にbuildHTMLが走るようにする。
  // var message_id = $('.main__chatcomments').last().data('message-id');
