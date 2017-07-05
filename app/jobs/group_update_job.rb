class GroupUpdateJob < ApplicationJob
  queue_as :default

  def perform(group, group_id)
    # Do something later, ie render back a partial for the group info and
    # broadcast to the related group
    group_info = Api.GroupsController.render(
      partial: 'api/groups/group',
      locals:  { group: group }
    )

    ActionCable.server.broadcast(
      "channel_#{group_id}",
      group: JSON.parse(group_info)
    )
  end
end
