class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :group_code, null: false
      t.string :phase, null: false, default: "filter"
      t.integer :creator_id, null: false

      t.timestamps
    end
  end
end
