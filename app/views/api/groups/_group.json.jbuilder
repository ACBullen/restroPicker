json.extract! group, :id, :group_code, :phase
json.set! "users" do
  group.users.each do |user|
    json.extract! user, :id
  end
end

json.set! "creator", group.creator.id
