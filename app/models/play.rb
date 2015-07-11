class Play < ActiveRecord::Base

  has_many :elements

  has_many :roles
  has_many :users, through: :roles

end
