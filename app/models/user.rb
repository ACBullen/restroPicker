# == Schema Information
#
# Table name: users
#
#  id           :integer          not null, primary key
#  username     :string           not null
#  group_id     :integer
#  filter_ready :boolean          default("false"), not null
#  choice_ready :boolean          default("false"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class User < ApplicationRecord
  validates :username, presence: true

  #after committing broadcast to related room user information:
  #after_commit { UserUpdateJob.perform_later(self, self.group_id) }

  has_one :owned_group,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :Group

  belongs_to :group, optional: true
end
