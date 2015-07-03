class CreateLines < ActiveRecord::Migration
  def change
    create_table :lines do |t|
    	t.references :play, index: true, null: false
    	t.references :role, index: true, null: false

    	t.text :text, null: false

    	t.integer :play_order, null: false

      t.timestamps null: false
    end
  end
end
