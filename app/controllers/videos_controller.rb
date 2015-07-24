class VideosController < ApplicationController

  def create
    @video = Video.create(video_params)
    render json: @video
  end

  def index
    @videos = Video.take(10)
    render json: @videos
  end

  private

  def video_params
    params.require(:video).permit(
      :ziggeo_id,
      :play_id,
      :line_id,
      :img_url,
      :video_url
    )
  end
end
