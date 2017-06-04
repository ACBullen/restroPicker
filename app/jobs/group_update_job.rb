class GroupUpdateJob < ApplicationJob
  queue_as :default

  def perform(group)
    # Do something later, ie render back a partial for the group info and
    # broadcast to the related group
    group = Api.GroupsController.render(
      partial: 'api/groups/group',
      locals:  { group: group }
    )

    ActionCable.server.broadcast(
      "channel_#{group.id}",
      group: JSON.parse(group)
    )
  end
end
