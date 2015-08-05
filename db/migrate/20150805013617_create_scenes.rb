class CreateScenes < ActiveRecord::Migration
  def change
    create_table :scenes do |t|
      t.references :play, index: true, null: false

      t.integer :play_order, null: false

      t.timestamps null: false
    end
  end
end
