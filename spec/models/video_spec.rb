require 'rails_helper'

RSpec.describe Video, type: :model do

  it { should belong_to(:play) }
  it { should belong_to(:line) }

  it { should validate_presence_of(:play) }
  it { should validate_presence_of(:ziggeo_id) }

end
