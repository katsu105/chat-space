$(function(){
   function buildHTML(message){

    var html =
              `<div class="main__chatcomments">
                <div class="main__chat-comments--user">
                  ${message.name}
                </div>
                <div class="main__chat-comments--text"></div>
                  <p class="lower-message__content">
                    ${message.content}
                    <img class="lower-message__image" src="${message.image}" >
                  </p>
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