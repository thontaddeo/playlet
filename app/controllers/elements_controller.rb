class ElementsController < ApplicationController

  def index
    @elements = Element.take(20)
    render json: @elements
  end
end
