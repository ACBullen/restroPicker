class Api::UsersController < ApplicationController
  def create
    @user = User.new(username: params[:username])

    @group = Group.find_by(group_code: params[:group_code])
    if @group
      if @user.save
        @user.group = @group
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    else
      render json: "No such group, sorry!", status: 404
    end
  end


    def update
      @user = User.find(params[:id])

      if @user.update_attributes(user_params)

      else
      end
    end

    private
    def user_params
      params.require(:user).permit(:ranking_ready)
    end
end
