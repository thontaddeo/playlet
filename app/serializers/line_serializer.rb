class LineSerializer < ActiveModel::Serializer
  attributes :id, :text, :type, :role_id, :scene_id, :scene_order,
             :role

  belongs_to :role
  has_one :video

  def type
    "Line"
  end
end
