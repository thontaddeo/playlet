require 'rails_helper'

RSpec.describe Element, type: :model do

  it { should belong_to(:play) }

  it { should validate_presence_of(:play) }
  it { should validate_presence_of(:text) }

  it { should validate_numericality_of(:scene).only_integer }

end
