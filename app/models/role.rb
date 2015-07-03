class Role < ActiveRecord::Base

	belongs_to :play, required: true
	belongs_to :user

	has_many :lines

	validates_presence_of :name

end
