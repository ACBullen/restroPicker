# == Schema Information
#
# Table name: category_joins
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_category_joins_on_user_id  (user_id)
#

require 'test_helper'

class CategoryJoinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
