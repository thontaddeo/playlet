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

play = Play.create
role = Role.create(name: Faker::Name.name, play: play, user: user)

play.elements << Element.create([
  { type: Line.to_s, text: Faker::Lorem.sentence, role: role },
  { type: Line.to_s, text: Faker::Lorem.sentence, role: role },
  { type: Direction.to_s, text: Faker::Lorem.sentence },
  { type: Line.to_s, text: Faker::Lorem.sentence, role: role },
  { type: Direction.to_s, text: Faker::Lorem.sentence }
])
