# == Schema Information
#
# Table name: rankings
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  rest_id    :integer          not null
#  ranking    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  rank       :integer
#
# Indexes
#
#  index_rankings_on_rest_id  (rest_id)
#  index_rankings_on_user_id  (user_id)
#

require 'test_helper'

class RankingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
