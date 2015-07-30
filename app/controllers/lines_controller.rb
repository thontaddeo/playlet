class LinesController < ApplicationController

  def index
    @lines = Line.includes(:video).where(scene: params[:scenes])
    render json: @lines
  end

  def show
    @line = Line.find(params[:id])
    render json: @line
  end
end
