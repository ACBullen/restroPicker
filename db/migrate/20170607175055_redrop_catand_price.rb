class RedropCatandPrice < ActiveRecord::Migration[5.0]
  def change

    def up
      drop_table :prices
      drop_table :price_joins
      drop_table :categories
      drop_table :category_joins
    end
    def down
      raise ActiveRecord::IrreversibleMigration
    end
  end
end
