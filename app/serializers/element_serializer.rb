class ElementSerializer < ActiveModel::Serializer
  attributes :id, :text, :type, :role_id, :play_id, :play_order

  has_many :videos

end
