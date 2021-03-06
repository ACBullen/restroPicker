class Api::GroupsController < ApplicationController

  def create
    @user = User.new(username: params[:username])

    if @user.save
      @group = @user.create_group
      render :show
    else
      render json: ["Error!"], status: 422
    end
  end

  def update
    @group = Group.find(params[:id])

    @group.update_attributes(group_attributes)
  end

  private

  def group_attributes
    params.require(:group).permit(:results_ready)
  end
end
