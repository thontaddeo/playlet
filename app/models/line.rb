class Line < ActiveRecord::Base

  include RankedModel
  ranks :play_order, with_same: :play_id

	belongs_to :play, required: true
	belongs_to :role, required: true

	validates_presence_of :text

	validate :role_belongs_to_play?

	def role_belongs_to_play?
		return true if role.play_id == play_id
  	errors.add(:role, "role must belong to the same play")
    false
	end
end
