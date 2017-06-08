class UpdateRestaurantTable < ActiveRecord::Migration[5.0]
  def change
    add_column :restaurants, :image_url, :string
    add_column :restaurants, :categories, :text

    remove_column :rankings, :rank
  end
end
