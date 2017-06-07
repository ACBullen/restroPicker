# == Schema Information
#
# Table name: groups
#
#  id            :integer          not null, primary key
#  group_code    :string           not null
#  creator_id    :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  results_ready :boolean          default("false")
#

class Group < ApplicationRecord
  validates :phase, inclusion: { in: ["filter", "choice", "result"] },
                    presence: true
  validates :group_code, :creator_id, presence: true
  before_validation :generate_group_code

  #after committing, broadcast to related room:
  after_commit { GroupUpdateJob.perform_later(self) }
  after_create { GroupCleanupJob.set(wait: 1.day).perform_later(self) }



  def generate_group_code
    self.group_code ||= SecureRandom.hex(3)
    @collision_check = Group.find_by(group_code: self.group_code)
    until(@collision_check == nil || self == @collision_check)
      self.group_code = SecureRandom.hex(3)
    end
  end

  belongs_to :creator,
             primary_key: :id,
             foreign_key: :creator_id,
             class_name: :User

  has_many :users,
           primary_key: :id,
           foreign_key: :group_id,
           class_name: :User,
           dependent: :destroy

  has_many :restaurants,
           dependent: :destroy
end
