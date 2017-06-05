# == Schema Information
#
# Table name: price_joins
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  price_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_price_joins_on_price_id  (price_id)
#  index_price_joins_on_user_id   (user_id)
#

class PriceJoin < ApplicationRecord
  validates :user_id, :price_id, presence: true
end
