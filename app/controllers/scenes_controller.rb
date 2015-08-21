class ScenesController < ApplicationController

  def show
    @scene = Scene.find(params[:id])
    render json: @scene
  end

  def index
    play = Play.first # TODO: Pull this out into accessible fn
    @scenes = play.scenes.includes(associations).rank(:play_order).offset(offset).limit(limit)
    render json: @scenes
  end

  private

  def offset
    params[:offset].present? ? params[:offset].to_i : 0
  end

  def limit
    params[:limit].present? ? params[:limit].to_i : 2
  end

  def associations
    [{ lines: :video }, :roles, :elements]
  end
end
