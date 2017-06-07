class ChangeGroupPhase < ActiveRecord::Migration[5.0]
  def change
    remove_column :groups, :phase
    add_column :groups, :results_ready, :boolean, default: false
  end
end
