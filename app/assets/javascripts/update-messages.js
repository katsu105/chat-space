function buildHTML(message) {
  var message_image = ""

    if(message.image)
      {var message_image = `<img class="lower-message__image" src="${message.image}" >`
    }
   var html =
              `<div class="main__chatcomments" data-message-id="${message.id}" >
                <div class="main__user">
                  <div class="main__chat-comments--user">
                    ${message.name}
                    <div class="main__chat-comments--date">
                      ${message.date}
                    </div>
                  </div>
                </div>
                <div class="main__chat-comments--text"></div>
                  <p class="lower-message__content">
                    ${message.content}<br />
                  </p>
                    ${message_image}
                </div>`
    return html;

  }

    var interval = setInterval(function() {

      if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      var messageLastId = $('.main__chatcomments:last').data('message-id');
    $.ajax({
      url: location.href,
      type: 'GET',
      data: {
        message: { id: messageLastId }
      },
      dataType: 'json'
    })

    .done(function(json) {
      var insertHTML = '';
      json.messages.forEach(function(message) {
          insertHTML += buildHTML(message);
          $("html,body").animate({scrollTop:$('.messages')[0].scrollHeight}, 'fast');
      });
      $('.messages').append(insertHTML);
    })
    .fail(function(json) {
      alert('自動更新に失敗しました')
    });
     } else {
    clearInterval(interval);
   }} , 5 * 1000 );