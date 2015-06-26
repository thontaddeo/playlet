class User < ActiveRecord::Base

  devise :database_authenticatable, :trackable, :validatable

  has_many :roles
  has_many :plays, through: :roles

end
