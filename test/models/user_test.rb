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

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
