# == Schema Information
#
# Table name: users
#
#  id           :integer          not null, primary key
#  username     :string           not null
#  group_id     :integer          not null
#  filter_ready :boolean          default("false"), not null
#  choice_ready :boolean          default("false"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class User < ApplicationRecord
  validates :username, :group_id, presence: true

  #after_commit broadcast to related room

  has_one :owned_group,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :Group

  belongs_to :group
end
