class Line < ActiveRecord::Base

  include RankedModel
  ranks :play_order, with_same: :play_id

	belongs_to :play, required: true
	belongs_to :role, required: true

	validates_presence_of :text

	validate :role_belongs_to_play?

	def role_belongs_to_play?

	end
end
