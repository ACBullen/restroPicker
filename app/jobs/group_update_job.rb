class GroupUpdateJob < ApplicationJob
  queue_as :default

  def perform(group, channel)
    # Do something later, ie render back a partial
    
  end
end
