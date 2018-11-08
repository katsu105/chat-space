$(function(){
   function buildHTML(message){

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
  $(".new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
      $("html,body").animate({scrollTop:$('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(data){
      alert('error');
    })
  })
});