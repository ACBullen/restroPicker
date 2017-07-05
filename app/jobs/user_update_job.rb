class UserUpdateJob < ApplicationJob
  queue_as :default

  def perform(user)
    # Do something later, ie render a user partial back to the subscribers
    # so they know where in the process everyone else is.
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
