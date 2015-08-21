# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create(
  email: "testing@example.com",
  password: "austerlitz",
  password_confirmation: "austerlitz"
)

# Create Play and associated Roles & Scenes
play = Play.create(title: "Springtime of the Peoples")
roles, scenes = [], []

10.times do
  roles << Role.create(name: Faker::Name.name, play: play, user: user)
  scenes << Scene.create(play: play)
end

# Create Elements associated with Scenes
scenes.each do |s|
  elements = []
  scene_roles = roles.sample(3)

  10.times do |i|
    element_type = (("#{Line.to_s} " * 3).split << Direction.to_s).sample
    elements << {
      type: element_type,
      scene: s,
      text: Faker::Lorem.sentences([1..3].sample).join(" ")
    }

    elements[-1][:role] = scene_roles.sample if element_type == "Line"
  end

  Element.create(elements)
end

# Create Videos for a subset of Lines
lines = Line.all.each do |l|
  next unless ([false] * 3 << true).sample == true

  l.video = Video.create(
    line: l,
    ziggeo_id: "b8439b90beb26bf71855b52f138fcb5b",
    img_url: "embed.ziggeo.com/v1/applications/3a6d35363c4ab51e656ac7d523d4c1d4/
      videos/b8439b90beb26bf71855b52f138fcb5b/image".squish,
    video_url: "embed.ziggeo.com/v1/applications/3a6d35363c4ab51e656ac7d523d4c1d
      4/videos/b8439b90beb26bf71855b52f138fcb5b/video".squish
  )
end
