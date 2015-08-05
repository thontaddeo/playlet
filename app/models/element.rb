class Element < ActiveRecord::Base

  include RankedModel
  ranks :scene_order, with_same: :scene_id

  belongs_to :scene, required: true

  delegate :play, to: :scene

  validates_presence_of :text

end
