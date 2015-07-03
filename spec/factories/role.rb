FactoryGirl.define do
	factory :role do
		name { Faker::Name.name }

		association :play
	end
end
