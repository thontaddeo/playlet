# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create(
  email: "testing@example.com",
  password: "testinglife",
  password_confirmation: "testinglife"
)

play = Play.find_or_create_by(title: "Life of Playlet")
roles = []

3.times do |idx|
  roles << Role.find_or_create_by(name: Faker::Name.name, play: play, user: user)
end

if play.elements.empty?
  elements = []
  scene = 1

  100.times do |idx|
    type = [Line.to_s, Line.to_s, Direction.to_s].sample

    elements << {
      type: type,
      text: Faker::Lorem.sentences([1..3].sample).join(" ")
    }

    elements[-1][:role] = roles.sample if type == "Line"
    elements[-1][:scene] = scene
    scene += 1 if (idx + 1) % 10 == 0
  end

  play.elements << Element.create(elements)
end
