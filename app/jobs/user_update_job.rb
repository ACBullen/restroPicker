class UserUpdateJob < ApplicationJob
  queue_as :default

  def perform(user, channel)
    # Do something later, ie render a user partial back to the subscribers
    # so they know where in the process everyone else is.
  end
end
