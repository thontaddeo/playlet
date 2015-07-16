class LineSerializer < ActiveModel::Serializer
  attributes :id, :text, :type, :role_id, :play_id, :play_order

  has_one :role
  has_one :video

end
