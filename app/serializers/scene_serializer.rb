class SceneSerializer < ActiveModel::Serializer
  attributes :id, :play_order, :recorded_video_count

  has_many :elements

  def recorded_video_count
    object.lines.select { |l| l.video.present? }.count
  end
end
