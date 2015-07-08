require 'rails_helper'

RSpec.describe "Sessions", :type => :feature do
  scenario "User visits signin page" do
    visit new_user_session_path

    expect(page).to have_title("Sign in")
    expect(page).to have_button("Sign in")
  end
end
