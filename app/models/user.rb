# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  username      :string           not null
#  group_id      :integer
#  ranking_ready :boolean          default("false"), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_users_on_username  (username)
#

class User < ApplicationRecord
  validates :username, presence: true

  #after committing broadcast to related room user information:
  after_commit { UserUpdateJob.perform_later(self, self.group_id) }


  def create_group
    @group = Group.new
    @group.creator = self
    self.group = @group
    if @group.save && self.save
      @group
    else
      p @group.errors.full_messages
      p self.errors.full_messages
      nil
    end
  end

  has_one :owned_group,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :Group

  belongs_to :group, optional: true

  has_many :rankings, dependent: :destroy
end
