// 削除ボタンで削除する実装
$(function () {
    $("#add-user").on("click", ".user-search-remove", function() {
    $(".chat-group-user").remove()
  })
});