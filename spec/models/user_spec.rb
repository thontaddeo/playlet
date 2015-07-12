require 'rails_helper'

RSpec.describe User, type: :model do

  it { should have_many(:roles) }
  it { should have_many(:plays) }

end
