class LinesController < ApplicationController

  def index
    @lines = Line.take(50)
    render json: @lines
  end
end
