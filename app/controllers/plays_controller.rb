class PlaysController < ApplicationController

  def show
    @play = Play.find(params[:id])
    render json: @play
  end
end
