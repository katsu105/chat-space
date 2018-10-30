$(function() {

  // インクリメンタルサーチの実装

  var search_list = $("#user-search-result");

function appendUser(user) {
   var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
  search_list.append(html);
}

 function appendNoUser(user) {
    var html = `<div class="chat-group-user clearfix">
                </div>`
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();

    // -------------------------------

    //検索されたユーザーの追加の実装

    

  $(".chat-group-user").on("click", ".user-search-add", function() {
    var add = $(".user-search-add").val();
    console.log("クリックイベント発火してます!!")
  })

    // -------------------------------


    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(user) {
      // $(".chat-group-user").empty();
      if (user.length !== 0) {
       user.forEach(function(user){
         appendUser(user);
       });
     }
     else {
       appendNoUser("一致するユーザーはいません。");
     }
   })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    });
  });
});