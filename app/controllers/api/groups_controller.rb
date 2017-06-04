class Api::GroupsController < ApplicationController
  def show
    @group = Group.find(params[:id])
    render :show
  end
end
