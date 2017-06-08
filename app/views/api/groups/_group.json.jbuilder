json.extract! group, :id, :group_code

user_ary = []
@group.users.each do |user|
  user_ary.push(user.id)
end


json.set! "users" do
  json.array! user_ary
end


json.set! "creator", group.creator.id
