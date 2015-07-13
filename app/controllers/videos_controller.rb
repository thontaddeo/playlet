class VideosController < ApplicationController

  def create
    @video = Video.create(video_params)
    render json: @roles
  end

  private

  def video_params
    params.require(:video).permit(:ziggeo_id, :play_id, :line_id)
  end
end
