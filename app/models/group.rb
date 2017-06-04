# == Schema Information
#
# Table name: groups
#
#  id         :integer          not null, primary key
#  group_code :string           not null
#  phase      :string           default("filter"), not null
#  creator_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Group < ApplicationRecord
  validates :phase, inclusion: { in: ["filter", "choice", "result"] },
                                 presence: true
  validates :group_code, :creator_id, presence: true
  after_initialize :generate_group_code

  #after committing, broadcast to related room:
  #after_commit { GroupUpdateJob.perform_later(self) }
  after_commit :test_info


  def test_info
    p self
  end

  def self.create_group
    @user = User.new(params[:username])

    if @user.save
      @group = @user.create_group
      render :show
    else
      render json: "something went wrong", status: 422
    end
  end

  def generate_group_code
    self.group_code ||= SecureRandom.urlsafe_base64(6)
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
end