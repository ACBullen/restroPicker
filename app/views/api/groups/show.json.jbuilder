json.partial! "group", group: @group

json.set! "currentUser" do
  json.partial! "api/users/user", user: @user
end

json.set! "users" do
  @group.users.each do |user|
    json.partial! "api/users/user", user: user
  end
end

json.set! "restaurants" do
  @group.restaurants.each do |restaurant|
    json.partial! "restaurant", restaurant: restaurant
  end
end
