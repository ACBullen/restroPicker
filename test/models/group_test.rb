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

require 'test_helper'

class GroupTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
