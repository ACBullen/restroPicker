# == Schema Information
#
# Table name: prices
#
#  id         :integer          not null, primary key
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Price < ApplicationRecord
end