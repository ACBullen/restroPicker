json.set! "group" do
  json.partial! "api/groups/group", group: @group
end

json.set! "currentUser" do
  json.partial! "user", user: @user
end

json.users(@group.users) do |user|
  json.partial! "user", user: user
end

json.set! "restaurants" do
  @group.restaurants.each do |restaurant|
    json.partial! "api/restaurants/restaurant", restaurant: restaurant
  end
end
