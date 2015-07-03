FactoryGirl.define do
	factory :line do
		text { Faker::Lorem.sentence }

		association :play

		after(:build) do |line, evaluator|
			line.role = build(:role, play: line.play) unless line.role
		end
	end
end
