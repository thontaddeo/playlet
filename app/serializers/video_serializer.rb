class VideoSerializer < ActiveModel::Serializer
  attributes :id, :ziggeo_id, :img_url, :video_url

  belongs_to :line

end
