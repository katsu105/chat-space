json.messages @messages.each do |message|
  json.id message.id
  json.date message.created_at.strftime("%Y/%m/%d %H:%M")
  json.name    message.user.name
  json.content message.content
  json.image message.image.url
end