class CreateCategoryJoins < ActiveRecord::Migration[5.0]
  def change
    create_table :category_joins do |t|
      t.integer :user_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end

    add_index :category_joins, :user_id
  end
end
