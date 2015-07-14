class Element < ActiveRecord::Base

  include RankedModel
  ranks :play_order, with_same: :play_id

  belongs_to :play, required: true

  validates_presence_of :text

  # Note: In the future, it is likely we will want to pull 'scene' out into an
  # AR model.
  #
  # TODO: Until then, we will need to validate that an element is not in an
  # out-of-order scene from what it's play_order dictates.
  #
  validates :scene, numericality: { only_integer: true }

end
