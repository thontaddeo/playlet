class Scene < ActiveRecord::Base

  include RankedModel
  ranks :play_order, with_same: :play_id

  belongs_to :play, required: true

  has_many :elements, dependent: :destroy

  # TODO: Potentially break this out of STI depending on UI changes.
  has_many :lines
  has_many :roles, -> { uniq }, through: :lines
  has_many :directions

end
