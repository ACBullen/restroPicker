class UserUpdateJob < ApplicationJob
  queue_as :default

  def perform(user,group_id)
    # Do something later, ie render a user partial back to the subscribers
    # so they know where in the process everyone else is.
    user_info = Api.GroupsController.render(
      partial: 'api/users/user',
      locals:  { user: user }
    )

    ActionCable.server.broadcast(
      "channel_#{group_id}",
      user: JSON.parse(user_info)
    )
  end
end
