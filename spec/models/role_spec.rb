require 'rails_helper'

RSpec.describe Role, type: :model do

  it { should belong_to(:play) }
  it { should belong_to(:user) }
  it { should have_many(:lines) }

  it { should validate_presence_of(:play) }
  it { should validate_presence_of(:name) }

end
