class RolesController < ApplicationController

  def index
    @roles = Role.take(3)
    render json: @roles
  end
end
