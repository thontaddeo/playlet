class CreatePlays < ActiveRecord::Migration
  def change
    create_table :plays do |t|

      t.string :title, null: false

      t.timestamps null: false
    end
  end
end
