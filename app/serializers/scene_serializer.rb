class SceneSerializer < ActiveModel::Serializer
  attributes :id, :play_order, :recorded_video_count

  has_many :elements
  has_many :roles

  # TODO: Pull these out into scene column
  def recorded_video_count
    object.lines.select { |l| l.video.present? }.count
  end
end
