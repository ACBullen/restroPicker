json.set! "group" do
  json.partial! "group", group: @group
end

json.set! "currentUser" do
  json.partial! "api/users/user", user: @user
end

json.set! "users" do
  @group.users.each do |user|
    json.set! user.id do
      json.partial! "api/users/user", user: user
    end
  end
end

json.set! "restaurants" do
  @group.restaurants.each do |restaurant|
    json.partial! "api/restaurants/restaurant", restaurant: restaurant
  end
end
