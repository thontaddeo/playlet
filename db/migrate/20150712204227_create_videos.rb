class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      # t.references :play, index: true, null: false
      t.references :line, index: true

      t.string :ziggeo_id, null: false
      t.string :img_url, null: false
      t.string :video_url, null: false

      t.timestamps null: false
    end
  end
end
