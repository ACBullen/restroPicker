class CreatePriceJoins < ActiveRecord::Migration[5.0]
  def change
    create_table :price_joins do |t|
      t.integer :user_id, null: false
      t.integer :price_id, null: false

      t.timestamps
    end
    add_index :price_joins, :user_id
    add_index :price_joins, :price_id
  end
end
