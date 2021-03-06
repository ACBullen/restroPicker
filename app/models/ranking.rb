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
#
# Indexes
#
#  index_rankings_on_rest_id  (rest_id)
#  index_rankings_on_user_id  (user_id)
#

class Ranking < ApplicationRecord
  belongs_to :restaurant,
    primary_key: :id,
    foreign_key: :rest_id,
    class_name: :Restaurant

  belongs_to :user
end
