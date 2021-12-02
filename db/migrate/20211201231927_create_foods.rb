class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.float :price
      t.belongs_to :pet, null: false, foreign_key: true

      t.timestamps
    end
  end
end
