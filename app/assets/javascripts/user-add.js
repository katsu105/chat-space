 // 検索したユーザーを追加する実装

 $(function() {
  var add_list = $("#add-user")
   function appendAddUser(user_id, user_name) {

   var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                <p class='chat-group-user__name'>${user_name}</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
              </div>`
  add_list.append(html);
  }

    $("#user-search-field").on("keyup", function() {
      var input = $("#user-search-field").val();

    $(".chat-group-user").on("click", ".user-search-add", function(user) {
      var user_id = $(".user-search-add").data('user-id');
      var user_name = $(".user-search-add").data('user-name');
      $(".chat-group-user").on("click").empty();
      appendAddUser(user_id, user_name);
    })
  });
});