class UserUpdateJob < ApplicationJob
  queue_as :default

  def perform(user,user_id)
    # Do something later, ie render a user partial back to the subscribers
    # so they know where in the process everyone else is.
    p user, user_id
    user = Api.GroupsController.render(
      partial: 'api/users/user',
      locals:  { user: user }
    )

    ActionCable.server.broadcast(
      "channel_1",
      user: JSON.parse(user)
    )
  end
end
