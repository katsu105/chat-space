json.messages @messages.each do |message|
  json.id message.id
  json.name    message.user.name
  json.content message.content
  json.image message.image.url
end