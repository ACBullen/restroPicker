class StreamlineUserStatusBooleans < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :filter_ready
  end
end
