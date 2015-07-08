require 'rails_helper'

RSpec.describe ApplicationHelper, type: :helper do

  describe "full_title" do
    it "should include the base title" do
      expect(full_title("foo")).to match(/^Playlet/)
    end

    it "should include the page title" do
      expect(full_title("foo")).to match(/foo/)
    end

    it "should not include '|' without a page_title" do
      expect(full_title("")).not_to match(/\|/)
    end
  end
end
