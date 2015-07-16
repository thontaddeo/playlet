class Line < Element

  belongs_to :role, required: true

  has_one :video

  validate :role_belongs_to_play?, if: "role.present? && play.present?"

  def role_belongs_to_play?
    return true if role.play_id == play_id
    errors.add(:role, "role must belong to the same play")
    false
  end
end
