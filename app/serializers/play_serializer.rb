class PlaySerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :roles
  has_many :elements

end
