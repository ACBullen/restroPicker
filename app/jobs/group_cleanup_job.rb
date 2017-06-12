class GroupCleanupJob < ApplicationJob
  queue_as :default

  def perform(group)
    group.destroy
  end
end
