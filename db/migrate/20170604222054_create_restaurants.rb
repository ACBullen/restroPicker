class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|

      t.integer :group_id, null: false
      t.string :name, null: false
      t.float :rating
      t.string :yelp_url, null: false
      t.string :address, null: false

      t.timestamps
    end
    
    add_index :restaurants, :group_id
  end
end
