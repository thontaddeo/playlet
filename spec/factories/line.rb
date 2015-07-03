FactoryGirl.define do
	factory :line do
		text { Faker::Lorem.sentence }

		after(:build) do |line, evaluator|
			line.role = build(:role, play: play)
		end
	end
end
