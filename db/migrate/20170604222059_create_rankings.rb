class CreateRankings < ActiveRecord::Migration[5.0]
  def change
    create_table :rankings do |t|
      t.integer :user_id, null: false
      t.integer :rest_id, null: false
      t.integer :ranking, null: false

      t.timestamps
    end

    add_index :rankings, :user_id
    add_index :rankings, :rest_id
  end
end
