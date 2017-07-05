class GroupUpdateJob < ApplicationJob
  queue_as :default

  def perform(group, group_id)
    # Do something later, ie render back a partial for the group info and
    # broadcast to the related group
    p group, group_id
    group = Api.GroupsController.render(
      partial: 'api/groups/group',
      locals:  { group: group }
    )

    ActionCable.server.broadcast(
      "channel_1",
      group: JSON.parse(group)
    )
  end
end
