class LineSerializer < ActiveModel::Serializer
  attributes :id, :text, :role_id, :play_id
end
