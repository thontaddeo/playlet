class CreateElements < ActiveRecord::Migration
  def change
    create_table :elements do |t|
      t.references :play, index: true, null: false
      t.references :role, index: true

      t.integer :play_order, null: false
      t.string :type, null: false
      t.text :text, null: false

      t.timestamps null: false
    end
  end
end
