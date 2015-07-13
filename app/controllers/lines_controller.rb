class LinesController < ApplicationController

  def show
    @line = Line.find(params[:id])
    render json: @line
  end
end
