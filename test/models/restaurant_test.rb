# == Schema Information
#
# Table name: restaurants
#
#  id         :integer          not null, primary key
#  group_id   :integer          not null
#  name       :string           not null
#  rating     :float
#  yelp_url   :string           not null
#  address    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_restaurants_on_group_id  (group_id)
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
