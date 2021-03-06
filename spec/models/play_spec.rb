require 'rails_helper'

RSpec.describe Play, type: :model do

  it { should have_many(:roles) }
  it { should have_many(:users) }
  it { should have_many(:elements) }

  it { should validate_presence_of(:title) }

end
