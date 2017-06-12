json.set! "group" do
  json.partial! "group", group: @group
end

json.set! "currentUser" do
  json.partial! "api/users/user", user: @user
end

json.users(@group.users) do |user|
  json.partial! "api/users/user", user: user
end

json.set! "restaurants" do
  @group.restaurants.each do |restaurant|
    json.partial! "api/restaurants/restaurant", restaurant: restaurant
  end
end
