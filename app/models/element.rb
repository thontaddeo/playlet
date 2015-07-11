class Element < ActiveRecord::Base

  include RankedModel
  ranks :play_order, with_same: :play_id

  belongs_to :play, required: true

  validates_presence_of :text

end
