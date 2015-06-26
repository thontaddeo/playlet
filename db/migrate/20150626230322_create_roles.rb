class CreateRoles < ActiveRecord::Migration
  def change
    create_table :roles do |t|
    	t.references :play, index: true, null: false
    	t.references :user, index: true

      t.timestamps null: false
    end
  end
end
