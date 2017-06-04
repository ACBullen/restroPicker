class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.integer :group_id
      t.boolean :filter_ready, null: false, default: false
      t.boolean :ranking_ready, null: false, default: false

      t.timestamps
    end
    add_index :users, :username
  end
end
