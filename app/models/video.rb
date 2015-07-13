class Video < ActiveRecord::Base

  belongs_to :play, required: true
  belongs_to :line

  validates_presence_of :ziggeo_id

  validate :line_belongs_to_play?, if: "line.present? && play.present?"

  def line_belongs_to_play?
    return true if line.play_id == play_id
    errors.add(:role, "line must belong to the same play")
    false
  end
end
