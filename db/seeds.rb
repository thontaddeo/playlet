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
role = Role.create(name: "2Pac", play: play, user: user)

role.lines << Line.create([
  { text: Faker::Lorem.sentence, play: play },
  { text: Faker::Lorem.sentence, play: play },
  { text: Faker::Lorem.sentence, play: play }
])
