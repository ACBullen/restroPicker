class AddValueToRankings < ActiveRecord::Migration[5.0]
  def change
    add_column :rankings, :rank, :integer
  end
end
