class Play < ActiveRecord::Base

  has_many :scenes
  has_many :elements, through: :scenes

  has_many :roles
  has_many :users, through: :roles

  validates_presence_of :title

end
