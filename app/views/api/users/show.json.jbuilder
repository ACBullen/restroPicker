json.partial! "user", user: @user
json.partial! 'groups/group' group: @user.group
