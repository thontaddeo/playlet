class ElementSerializer < ActiveModel::Serializer
  attributes :id, :text, :type, :role_id, :play_id, :play_order

end
