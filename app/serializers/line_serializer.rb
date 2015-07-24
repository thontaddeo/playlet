class LineSerializer < ActiveModel::Serializer
  attributes :id, :text, :type, :role_id, :play_id, :play_order, :scene

  has_one :video

end
