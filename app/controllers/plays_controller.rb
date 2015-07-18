class PlaysController < ApplicationController

  def show
    @play = Play.includes(:elements, :roles).find(params[:id])
    render json: @play
  end
end
