require 'rails_helper'

RSpec.describe Line, type: :model do
	let(:line) { create(:line) }

  it "should require role belongs to the same play" do
  	invalid_line = build(:line, role: build(:role))
  	expect(invalid_line.valid?).to be_falsy
  	expect(invalid_line.errors[:role].size).to eq(1)
  end
end
