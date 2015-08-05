class DirectionSerializer < ActiveModel::Serializer
  attributes :id, :text, :type, :scene_id, :scene_order

  def type
    "Direction"
  end
end
