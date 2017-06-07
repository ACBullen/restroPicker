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

class Restaurant < ApplicationRecord
  has_many :rankings,
    primary_key: :id,
    foreign_key: :rest_id,
    class_name: :Ranking
    
  belongs_to :group
end
