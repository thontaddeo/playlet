require 'rails_helper'

RSpec.describe Line, type: :model do
	let(:line) { create(:line) }

  it "should require role belongs to the same play" do
  	expect(line).to be_valid
  	pending
  end
end
