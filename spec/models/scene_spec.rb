require 'rails_helper'

RSpec.describe Scene, type: :model do
  it { should belong_to(:play) }

  it { should validate_presence_of(:play) }

end
